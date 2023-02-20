import React from 'react';
import { useToDo } from '../context';
import { TodoItemType } from '../type';
import { CallBackReducer } from '../../../utils/types';

const getLeftTodo: CallBackReducer<TodoItemType, number> = (left, todo) => {
	left += todo.isChecked ? 0 : 1;
	return left;
};

const ControlPanel: React.FC<{}> = () => {
	const { state: todoList } = useToDo();
	const left = todoList.length ? todoList.reduce(getLeftTodo, 0) : 0;

	return (
		<div className='flex justify-between items-center pt-4'>
			<div className='underline text-gray-500 text-sm'>{left} left</div>
			<div className='flex gap-2'>
				<button className='underline text-gray-500 text-sm transition-colors hover:text-gray-900'>all</button>
				<button className='underline text-gray-500 text-sm transition-colors hover:text-gray-900'>active</button>
				<button className='underline text-gray-500 text-sm transition-colors hover:text-gray-900'>completed</button>
			</div>
		</div>
	);
};

export default ControlPanel;
