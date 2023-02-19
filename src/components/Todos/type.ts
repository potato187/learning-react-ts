export interface TodoItemType {
	id: string;
	description?: string;
	isChecked?: boolean;
}

export type ActionType = {
	type: 'ADD' | 'REMOVE' | 'UPDATE' | 'CHECKED';
	payload: TodoItemType;
};

export type ContextType = {
	state: TodoItemType[];
	dispatch: React.Dispatch<ActionType>;
};

export type UseToDo = {
	state: TodoItemType[];
	addItem: (item: TodoItemType) => void;
	removeItem: (id: string) => void;
	updateItem: (item: TodoItemType) => void;
};
