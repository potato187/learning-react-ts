import React from 'react';
import useInput from '@/hooks/useInput';
import { uuid } from '@/utils';
import { useToDoContext } from '@/components/Todo/context';

const AddItem = () => {
	const [value, setValue] = useInput('');
	const { addItem } = useToDoContext();

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setValue(event.target.value);
	};

	const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		addItem({ id: uuid(), description: value, isChecked: false, isShowed: true, isDeleted: false });
		setValue('');
		return false;
	};

	return (
		<form className='flex mb-2' onSubmit={handleAddItem}>
			<input
				type='text'
				className='flex-shrink-0 flex-grow leading-normal border border-1 outline-none py-3 px-2 transition-colors focus:border-blue-500'
				placeholder='Inter to do...'
				value={value}
				onChange={handleOnChange}
			/>
		</form>
	);
};

export default AddItem;
