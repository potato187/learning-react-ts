import React from 'react';
import Heading from '../Heading';
import AddItem from './AddItem';
import { ToDoProvider } from './context';
import ControlPanel from './ControlPanel';
import ListItem from './ListItem';

const Todo: React.FC = () => {
	return (
		<ToDoProvider>
			<div className='px-3 pt-2 pb-4 rounded-sm shadow-[0_2px_4px_0_rgba(0,0,0,0.2),0_25px_50px_0_rgba(0,0,0,0.1)]'>
				<Heading title='TO DO APP' className='text-3xl font-bold text-center mb-3' />
				<AddItem />
				<ListItem />
				<ControlPanel />
			</div>
		</ToDoProvider>
	);
};

export default Todo;
