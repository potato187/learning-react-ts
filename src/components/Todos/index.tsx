import React from 'react';
import { uuid } from '../../utils';
import Heading from '../Heading';
import AddItem from './AddItem';
import { initialState, ToDoProvider } from './context';
import Item from './Item';
import ListItem from './ListItem';

const Todo: React.FC = () => {
	return (
		<ToDoProvider>
			<div className='px-2 pt-2 pb-4 shadow-md rounded-sm'>
				<Heading title='TO DO APP' className='text-xl font-primary font-bold text-center mb-3' />
				<AddItem />
				<ListItem />
			</div>
		</ToDoProvider>
	);
};

export default Todo;
