import { FC, ReactNode } from 'react';

type CardProps = {
	title: string;
	description: string;
	children?: ReactNode;
};

const Card: FC<CardProps> = ({ title, description, children }) => {
	return (
		<div className="border rounded-lg p-4 shadow-lg">
			<h3 className="text-lg font-bold">{title}</h3>
			<p className="text-gray-600">{description}</p>
			<div className="mt-2">{children}</div>
		</div>
	);
};

export default Card;
