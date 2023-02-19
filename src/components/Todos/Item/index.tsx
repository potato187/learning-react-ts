import React from 'react';
import useInput from '../../../hooks/useInput';
import { TodoItemType } from '../type';

const Item: React.FC<TodoItemType> = ({ id, isChecked = false, description = '' }) => {
	const [todo, setTodo] = useInput(description);
	const [checked, setChecked] = useInput(isChecked);

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setTodo(event.target.value);
	};

	const handleToggleCheckbox = (): void => {
		setChecked((prevState) => !prevState);
	};

	return (
		<div className='flex w-full items-center gap-2 py-2 border-b'>
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
				className='flex-grow outline-none peer-checked:line-through peer-checked:text-gray-600 py-2 px-1 border-b-[1px] border-b-transparent transition-all focus:border-b-blue-500'
				value={todo}
				onChange={handleOnChange}
			/>
		</div>
	);
};

export default Item;
