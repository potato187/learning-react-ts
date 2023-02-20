import React from 'react';
import { useToDo } from '../context';
import Item from '../Item';

const ListItem: React.FC<{ children?: any; rest?: any[] }> = ({ children, ...rest }) => {
	const { state: todoList } = useToDo();

	return (
		<div className='flex flex-col w-100 peer' {...rest}>
			{todoList.length > 0 ? (
				todoList.map(({ id, description, isChecked }) => (
					<Item key={id} id={id} isChecked={isChecked} description={description} />
				))
			) : (
				<div className='w-full gap-3 py-2 border-b group text-center text-gray-400 italic '>
					<p>Nothing needs to be done !</p>
				</div>
			)}
		</div>
	);
};

export default ListItem;
