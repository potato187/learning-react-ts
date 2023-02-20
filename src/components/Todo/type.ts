type Id = string;

export interface TodoItemType {
	id: Id;
	description?: string;
	isChecked?: boolean;
	isShowed?: boolean;
	isDeleted?: boolean;
}

export type ActionType = 'ADD' | 'REMOVE' | 'UPDATE' | 'CHECKED';

export type FilterType = 'ALL' | 'ACTIVE' | 'COMPLETED';

export type FeatureType = 'CLEAR_ALL' | 'UNDO';

export type ActionTodo = {
	type: ActionType;
	payload: TodoItemType;
};

export type FilterTodo = {
	type: FilterType;
};

export type FeatureToDo = {
	type: FeatureType;
};

export type ToDoList = {
	list: TodoItemType[];
	undoList: Id[];
	filter: FilterType;
};

export type ContextType<T> = {
	state: ToDoList;
	dispatch: React.Dispatch<T>;
};

export type UseToDo = {
	state: ToDoList;
	addItem: (item: TodoItemType) => void;
	removeItem: (id: string) => void;
	updateItem: (item: TodoItemType) => void;
	filterTodoByType: (type: FilterType) => void;
	updateTodoByFeature: (type: FeatureType) => void;
};
