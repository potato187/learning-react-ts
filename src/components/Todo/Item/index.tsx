import React from 'react';
import useInput from '../../../hooks/useInput';
import { useToDo } from '../context';
import { TodoItemType } from '../type';

const Item: React.FC<TodoItemType> = ({ id, isChecked = false, isShowed, description = '' }) => {
	const { updateItem, removeItem } = useToDo();
	const [todo, setTodo] = useInput(description);
	const [checked, setChecked] = useInput(isChecked);

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setTodo(event.target.value);
	};

	const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement>): void => {
		updateItem({ id, description: event.target.value, isChecked, isShowed });
	};

	const handleToggleCheckbox = (): void => {
		setChecked((prevState) => !prevState);
		updateItem({ id, isChecked: !checked, isShowed });
	};

	const handleOnClick = () => {
		removeItem(id);
	};

	return (
		<div className='flex w-full items-center gap-3 py-2 px-1 border-b group'>
			<input
				hidden
				id={id}
				className='peer child-sibling:opacity-100'
				type='checkbox'
				checked={checked}
				onChange={handleToggleCheckbox}
			/>
			<label
				htmlFor={id}
				className='relative flex-shrink-0 flex justify-center items-center w-4 h-4 border border-1 border-gray-400 rounded-sm cursor-pointer peer-checked:border-blue-500'>
				<span className='inline-block w-[5px] h-[9px] border-b-2 border-b-blue-500 border-r-2 border-r-blue-500 rotate-45 -mt-[3px] opacity-0 transition-all'></span>
			</label>
			<input
				type='text'
				className='flex-grow outline-none peer-checked:line-through peer-checked:text-gray-600 py-2 px-1 border border-transparent transition-all focus:border-blue-500'
				value={todo}
				onChange={handleOnChange}
				onBlur={handleOnBlur}
			/>
			<button
				className='flex-shrink-0 inline-flex justify-center items-center py-1 px-1 leading-normal text-xs bg-red-500 text-white rounded-sm transition-all hover:bg-red-600 opacity-0 group-hover:opacity-100'
				onClick={handleOnClick}>
				<span>Remove</span>
			</button>
		</div>
	);
};

export default Item;
