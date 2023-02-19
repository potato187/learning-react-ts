import produce from 'immer';
import { createContext, useReducer, useCallback, useContext } from 'react';
import { uuid } from '../../utils';
import { TodoItemType, ActionType, ContextType, UseToDo } from './type';

export const initialState: TodoItemType[] = [
	{
		id: uuid(),
		description: 'first to do',
		isChecked: false,
	},
];

const toDoReducer = (state: TodoItemType[], action: ActionType): TodoItemType[] => {
	switch (action.type) {
		case 'ADD':
			const nextState = produce(state, (draft) => {
				draft.push(action.payload);
			});
			return nextState;
		case 'REMOVE':
			return state;
		case 'UPDATE':
			return state;
		default:
			return state;
	}
};

const ToDoContext = createContext<ContextType>({
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
				type: 'ADD',
				payload: { id },
			});
		},
		[dispatch]
	);

	const updateItem = useCallback(
		(todoItem: TodoItemType): void => {
			dispatch({
				type: 'ADD',
				payload: todoItem,
			});
		},
		[dispatch]
	);

	return { state, addItem, removeItem, updateItem };
};
