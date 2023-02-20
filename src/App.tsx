import React from 'react';
import Heading from './components/Heading';
import Todo from './components/Todo';

const App = () => {
	return (
		<div className='xl:container mx-auto pt-10 pb-5 min-h-full'>
			<div className='grid grid-cols-12'>
				<div className='col-start-5 col-end-9'>
					<Todo />
				</div>
			</div>
		</div>
	);
};

export default App;
