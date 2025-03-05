import { Meta, StoryObj } from '@storybook/react';
import Badge from './Lazy';

const metaBadge: Meta<typeof Badge> = {
	title: 'Components/Atoms/Badge',
	component: Badge,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: 'select',
			options: ['success', 'warning', 'error'],
		},
	},
};

export default metaBadge;

export const Success: StoryObj<typeof Badge> = {
	args: {
		text: 'Success',
		variant: 'success',
	},
};

export const Warning: StoryObj<typeof Badge> = {
	args: {
		text: 'Warning',
		variant: 'warning',
	},
};

export const Error: StoryObj<typeof Badge> = {
	args: {
		text: 'Error',
		variant: 'error',
	},
};
