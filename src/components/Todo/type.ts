export interface TodoItemType {
	id: string;
	description?: string;
	isChecked?: boolean;
	isShowed?: boolean;
}

export type ActionType = 'ADD' | 'REMOVE' | 'UPDATE' | 'CHECKED';
export type FilterType = 'ALL' | 'ACTIVE' | 'COMPLETED';

export type ActionTodo = {
	type: ActionType;
	payload: TodoItemType;
};

export type FilterTodo = {
	type: FilterType;
};

export type ContextType<T> = {
	state: TodoItemType[];
	dispatch: React.Dispatch<T>;
};

export type UseToDo = {
	state: TodoItemType[];
	addItem: (item: TodoItemType) => void;
	removeItem: (id: string) => void;
	updateItem: (item: TodoItemType) => void;
	filterTodoByType: (type: FilterType) => void;
};
