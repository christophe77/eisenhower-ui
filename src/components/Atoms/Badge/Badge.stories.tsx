import { Meta, StoryObj } from '@storybook/react';
import { LazyBadge, BadgeProps } from './Lazy';
import {LazyThemeProvider} from '../../Foundations/ThemeProvider/Lazy';

const metaBadge: Meta<BadgeProps> = {
	title: 'Components/Atoms/Badge',
	component: LazyBadge,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<LazyThemeProvider>
				<div className="flex text-center p-10">
					<Story />
				</div>
			</LazyThemeProvider>
		),
	],
	argTypes: {
		variant: {
			control: 'select',
			options: ['success', 'warning', 'error'],
		},
	},
};

export default metaBadge;

export const Success: StoryObj<BadgeProps> = {
	args: {
		text: 'Success',
		variant: 'success',
	},
};

export const Warning: StoryObj<BadgeProps> = {
	args: {
		text: 'Warning',
		variant: 'warning',
	},
};

export const Error: StoryObj<BadgeProps> = {
	args: {
		text: 'Error',
		variant: 'error',
	},
};
