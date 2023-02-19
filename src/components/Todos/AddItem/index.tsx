import useInput from '../../../hooks/useInput';
import { uuid } from '../../../utils';
import { useToDo } from '../context';

const AddItem = () => {
	const [value, setValue] = useInput('');
	const { addItem } = useToDo();

	const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setValue(event.target.value);
	};

	const handleAddItem = () => {
		addItem({ id: uuid(), description: value, isChecked: false });
		setValue('');
	};

	return (
		<div className='flex mb-2'>
			<input
				type='text'
				className='flex-shrink-0 flex-grow text-sm leading-normal rounded-[0.25rem_0_0_0.25rem] border border-1 outline-none py-2 px-2 transition-colors focus:border-blue-500'
				placeholder='Inter to do...'
				value={value}
				onChange={handleOnChange}
			/>
			<button
				onClick={handleAddItem}
				className='flex-shrink-0 py-2 px-4 bg-blue-500 text-white text-sm rounded-[0_0.25rem_0.25rem_0] transition-colors hover:bg-blue-600'>
				Add Todo
			</button>
		</div>
	);
};

export default AddItem;
