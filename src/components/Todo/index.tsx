import Heading from '@/components/Heading';
import AddItem from '@/components/Todo/AddItem';
import { ToDoProvider } from '@/components/Todo/context';
import ControlPanel from '@/components/Todo/ControlPanel';
import ListItem from '@/components/Todo/ListItem';
import React from 'react';

const Todo: React.FC = () => {
	return (
		<ToDoProvider>
			<div className='px-3 pt-2 pb-4 rounded-sm shadow-[0_2px_4px_0_rgba(0,0,0,0.2),0_25px_50px_0_rgba(0,0,0,0.1)]'>
				<Heading title='TO DO APP' className='text-2xl lg:text-3xl font-bold text-center mb-3' />
				<AddItem />
				<ListItem />
				<ControlPanel />
			</div>
		</ToDoProvider>
	);
};

export default Todo;
