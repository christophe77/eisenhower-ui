import { Meta, StoryObj } from '@storybook/react';
import Avatar from './Lazy';

const metaAvatar: Meta<typeof Avatar> = {
	title: 'Components/Atoms/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="p-5">
				<Story />
			</div>
		),
	],
	argTypes: {
		alt: { control: 'text' },
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
		},
	},
};

export default metaAvatar;

export const Small: StoryObj<typeof Avatar> = {
	args: {
		imgSrc: 'https://placehold.co/40',
		size: 'sm',
		alt: 'Small size avatar',
	},
};

export const Medium: StoryObj<typeof Avatar> = {
	args: {
		imgSrc: 'https://placehold.co/60',
		size: 'md',
		alt: 'Medium size avatar',
	},
};

export const Large: StoryObj<typeof Avatar> = {
	args: {
		imgSrc: 'https://placehold.co/80',
		size: 'lg',
		alt: 'Large size avatar',
	},
};
