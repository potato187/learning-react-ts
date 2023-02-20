import { useToDoContext } from '@/components/Todo/context';
import Item from '@/components/Todo/Item';
import React from 'react';

const ListItem: React.FC<{ children?: any; rest?: any[] }> = ({ children, ...rest }) => {
	const { state: todoList } = useToDoContext();

	return (
		<div className='max-h-[275px] overflow-y-auto snap-y snap-mandatory scroll-smooth pr-1'>
			<div className='flex flex-col w-100 peer' {...rest}>
				{todoList.list.length > 0 ? (
					todoList.list.map(({ id, ...rest }) => (rest.isShowed ? <Item key={id} id={id} {...rest} /> : null))
				) : (
					<div className='w-full gap-3 py-2 border-b group text-center text-gray-400 italic '>
						<p>Nothing needs to be done !</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ListItem;
