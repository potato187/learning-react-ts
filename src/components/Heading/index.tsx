import React from 'react';
import cn from 'classnames';

const Heading = ({ title = '', className }: { title: string; className?: string }) => {
	return <h1 className={cn('text-blue-700 font-bold', className)}>{title}</h1>;
};

export default Heading;
