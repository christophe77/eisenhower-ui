import { Meta, StoryObj } from '@storybook/react';
import { LazyAvatar, AvatarProps } from './Lazy';

const metaAvatar: Meta<AvatarProps> = {
	title: 'Components/Atoms/Avatar',
	component: LazyAvatar,
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

export const Small: StoryObj<AvatarProps> = {
	args: {
		imgSrc: 'https://placehold.co/40',
		size: 'sm',
		alt: 'Small size avatar',
	},
};

export const Medium: StoryObj<AvatarProps> = {
	args: {
		imgSrc: 'https://placehold.co/60',
		size: 'md',
		alt: 'Medium size avatar',
	},
};

export const Large: StoryObj<AvatarProps> = {
	args: {
		imgSrc: 'https://placehold.co/80',
		size: 'lg',
		alt: 'Large size avatar',
	},
};
