import produce from 'immer';
import { createContext, useCallback, useContext, useReducer } from 'react';
import { ActionTodo, ContextType, TodoItemType, UseToDo, ActionType, FilterTodo, FilterType } from './type';

export const initialState: TodoItemType[] = [];

const toDoReducer = (state: TodoItemType[], action: ActionTodo | FilterTodo): TodoItemType[] => {
	switch (action.type) {
		case 'ADD':
			return produce(state, (draft) => {
				draft.push(action.payload);
			});
		case 'REMOVE':
			return produce(state, (draft) => {
				const index = draft.findIndex((todo) => todo.id === action.payload.id);
				draft.splice(index, 1);
			});
		case 'UPDATE':
			return produce(state, (draft) => {
				const index = draft.findIndex((todo) => todo.id === action.payload.id);
				draft[index] = { ...draft[index], ...action.payload };
			});
		case 'ACTIVE':
			return produce(state, (draft) => {
				draft.forEach((todo) => {
					todo.isShowed = !todo.isChecked;
				});
			});
		case 'COMPLETED':
			return produce(state, (draft) => {
				draft.forEach((todo) => {
					todo.isShowed = !todo.isChecked;
				});
			});
		case 'ALL':
			return produce(state, (draft) => {
				draft.forEach((todo) => {
					todo.isShowed = true;
				});
			});
		default:
			return state;
	}
};

const ToDoContext = createContext<ContextType<ActionTodo | FilterTodo>>({
	state: [],
	dispatch: () => null,
});

export const ToDoProvider: React.FC<{ children: any }> = ({ children }) => {
	const [state, dispatch] = useReducer(toDoReducer, initialState);
	return <ToDoContext.Provider value={{ state, dispatch }}>{children}</ToDoContext.Provider>;
};

export const useToDo = (): UseToDo => {
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

	return { state, addItem, removeItem, updateItem, filterTodoByType };
};
