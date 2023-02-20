import { useToDoContext } from '@/components/Todo/context';
import { FeatureType, FilterType, TodoItemType } from '@/components/Todo/type';
import { CallBackReducer } from '@/utils/types';
import cn from 'classnames';
import React from 'react';

const getLeftTodo: CallBackReducer<TodoItemType, number> = (left, todo) => {
	left += todo.isChecked ? 0 : 1;
	return left;
};

const ControlPanel: React.FC<{}> = () => {
	const { state: todoList, filterTodoByType, updateTodoByFeature } = useToDoContext();
	const left = todoList.list.length ? todoList.list.reduce(getLeftTodo, 0) : 0;

	const handleOnFilter = (type: FilterType): void => {
		filterTodoByType(type);
	};

	const handleOnUpdate = (type: FeatureType): void => {
		updateTodoByFeature(type);
	};

	const classNames: string = 'text-gray-500 text-sm transition-colors hover:text-gray-900';
	const btnUndoDisabled: boolean = !todoList.undoList.length;
	const btnClearAllDisabled: boolean = !todoList.list.length;

	return (
		<div className='flex justify-between items-center pt-4'>
			<div className='underline text-gray-500 text-sm'>{left} left</div>
			<div className='flex gap-2'>
				<button
					className={cn(classNames, todoList.filter === 'ALL' ? 'underline text-gray-900' : '')}
					onClick={() => handleOnFilter('ALL')}>
					all
				</button>
				<button
					className={cn(classNames, todoList.filter === 'ACTIVE' ? 'underline text-gray-900' : '')}
					onClick={() => handleOnFilter('ACTIVE')}>
					active
				</button>
				<button
					className={cn(classNames, todoList.filter === 'COMPLETED' ? 'underline text-gray-900' : '')}
					onClick={() => handleOnFilter('COMPLETED')}>
					completed
				</button>
				<button disabled={btnUndoDisabled} className={cn(classNames)} onClick={() => handleOnUpdate('UNDO')}>
					undo
				</button>
				<button
					disabled={btnClearAllDisabled}
					className={cn(classNames, 'text-red-500 hover:text-red-700')}
					onClick={() => handleOnUpdate('CLEAR_ALL')}>
					clear all
				</button>
			</div>
		</div>
	);
};

export default ControlPanel;
