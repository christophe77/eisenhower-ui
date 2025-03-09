import { Meta, StoryObj } from '@storybook/react';
import Button from './Lazy';
import ThemeProvider from '../../Foundations/ThemeProvider/Lazy';

const metaButton: Meta<typeof Button> = {
	title: 'Components/Atoms/Button',
	component: Button,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<ThemeProvider>
				<div className="p-5">
					<Story />
				</div>
			</ThemeProvider>
		),
	],
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'outline'],
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
		},
		disabled: { control: 'boolean' },
	},
};

export default metaButton;

export const Primary: StoryObj<typeof Button> = {
	args: {
		children: 'Primary Button',
		variant: 'primary',
		size: 'md',
	},
};

export const Secondary: StoryObj<typeof Button> = {
	args: {
		children: 'Secondary Button',
		variant: 'secondary',
		size: 'md',
	},
};

export const Outline: StoryObj<typeof Button> = {
	args: {
		children: 'Outline Button',
		variant: 'outline',
		size: 'md',
	},
};

export const Disabled: StoryObj<typeof Button> = {
	args: {
		children: 'Disabled Button',
		variant: 'primary',
		size: 'md',
		disabled: true,
	},
};

export const Pending: StoryObj<typeof Button> = {
	args: {
		children: 'Pending...',
		variant: 'primary',
		size: 'md',
		disabled: true,
	},
};
