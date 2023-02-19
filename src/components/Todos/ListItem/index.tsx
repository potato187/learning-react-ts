import React from 'react';
import { useToDo } from '../context';
import Item from '../Item';

const ListItem: React.FC<{ children?: any; rest?: any[] }> = ({ children, ...rest }) => {
	const { state: todoList } = useToDo();
	return (
		<div className='flex flex-col w-100 peer' {...rest}>
			{todoList.map(({ id, description, isChecked }) => (
				<Item key={id} id={id} isChecked={isChecked} description={description} />
			))}
		</div>
	);
};

export default ListItem;
