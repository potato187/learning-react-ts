import React from 'react';
import Heading from './components/Heading';
import Todo from './components/Todo';

const App = () => {
	return (
		<div className='xl:container pt-10 pb-2 px-3 mx-auto  min-h-full'>
			<div className='grid grid-cols-12'>
				<div className='col-start-1 col-end-13 md:col-start-3 md:col-end-11 lg:col-start-4 lg:col-end-9'>
					<Todo />
				</div>
			</div>
		</div>
	);
};

export default App;
