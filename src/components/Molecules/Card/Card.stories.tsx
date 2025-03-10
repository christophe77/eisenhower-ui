import { Meta, StoryObj } from '@storybook/react';
import { LazyCard, CardProps } from './Lazy';

const metaCard: Meta<CardProps> = {
	title: 'Components/Molecules/Card',
	component: LazyCard,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="flex text-center p-10">
				<Story />
			</div>
		),
	],
};

export default metaCard;

export const Default: StoryObj<CardProps> = {
	args: {
		title: 'Card Title',
		description: 'This is a simple card description.',
	},
};
