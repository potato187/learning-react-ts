import produce from 'immer';
import { createContext, useCallback, useContext, useReducer } from 'react';
import {
	ActionTodo,
	ContextType,
	FeatureToDo,
	FeatureType,
	FilterTodo,
	FilterType,
	TodoItemType,
	ToDoList,
	UseToDo,
} from './type';

export const initialState: ToDoList = {
	list: [],
	undoList: [],
	filter: 'ALL',
};

const MAX_LIMIT_UNDO_LIST: number = 5;

const toDoReducer = (state: ToDoList, action: ActionTodo | FilterTodo | FeatureToDo): ToDoList => {
	switch (action.type) {
		case 'ADD':
			return produce(state, (draft) => {
				draft.list.push(action.payload);
			});
		case 'REMOVE':
			return produce(state, (draft) => {
				const index = draft.list.findIndex((todo) => todo.id === action.payload.id);
				draft.list[index] = { ...draft.list[index], isShowed: false, isDeleted: true };
				draft.undoList.length >= MAX_LIMIT_UNDO_LIST && draft.undoList.shift();
				draft.undoList.push(action.payload.id);
			});
		case 'UPDATE':
			return produce(state, (draft) => {
				const index = draft.list.findIndex((todo) => todo.id === action.payload.id);
				draft.list[index] = { ...draft.list[index], ...action.payload };
			});
		case 'ACTIVE':
			return produce(state, (draft) => {
				draft.filter = action.type;
				draft.list.forEach((todo) => {
					if (!todo.isDeleted) {
						todo.isShowed = todo.isChecked;
					}
				});
			});
		case 'COMPLETED':
			return produce(state, (draft) => {
				draft.filter = action.type;
				draft.list.forEach((todo) => {
					if (!todo.isDeleted) {
						todo.isShowed = !todo.isChecked;
					}
				});
			});
		case 'ALL':
			return produce(state, (draft) => {
				draft.filter = action.type;
				draft.list.forEach((todo) => {
					if (!todo.isChecked) {
						todo.isShowed = true;
					}
				});
			});
		case 'UNDO': {
			return produce(state, (draft) => {
				if (draft.undoList.length > 0) {
					const id = draft.undoList.pop();
					const index = draft.list.findIndex((todo) => todo.id === id);
					draft.list[index] = { ...draft.list[index], isDeleted: false, isShowed: true };
				}
			});
		}
		case 'CLEAR_ALL': {
			return produce(state, (draft) => {
				draft.list = [];
				draft.undoList = [];
				draft.filter = 'ALL';
			});
		}
		default:
			return state;
	}
};

const ToDoContext = createContext<ContextType<ActionTodo | FilterTodo | FeatureToDo>>({
	state: {
		list: [],
		undoList: [],
		filter: 'ALL',
	},
	dispatch: () => null,
});

export const ToDoProvider: React.FC<{ children: any }> = ({ children }) => {
	const [state, dispatch] = useReducer(toDoReducer, initialState);
	return <ToDoContext.Provider value={{ state, dispatch }}>{children}</ToDoContext.Provider>;
};

export const useToDoContext = (): UseToDo => {
	const { state, dispatch } = useContext(ToDoContext);

	const addItem = useCallback(
		(todoItem: TodoItemType): void => {
			dispatch({
				type: 'ADD',
				payload: todoItem,
			});
		},
		[dispatch]
	);

	const removeItem = useCallback(
		(id: string): void => {
			dispatch({
				type: 'REMOVE',
				payload: { id },
			});
		},
		[dispatch]
	);

	const updateItem = useCallback(
		(todoItem: TodoItemType): void => {
			dispatch({
				type: 'UPDATE',
				payload: todoItem,
			});
		},
		[dispatch]
	);

	const filterTodoByType = useCallback(
		(type: FilterType) => {
			dispatch({ type });
		},
		[dispatch]
	);

	const updateTodoByFeature = useCallback(
		(type: FeatureType) => {
			dispatch({ type });
		},
		[dispatch]
	);

	return { state, addItem, removeItem, updateItem, filterTodoByType, updateTodoByFeature };
};
