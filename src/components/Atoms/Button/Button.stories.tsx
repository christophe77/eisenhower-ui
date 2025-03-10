import { Meta, StoryObj } from '@storybook/react';
import { LazyButton, ButtonProps } from './Lazy';
import { LazyThemeProvider } from '../../Foundations/ThemeProvider/Lazy';

const metaButton: Meta<ButtonProps> = {
	title: 'Components/Atoms/Button',
	component: LazyButton,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<LazyThemeProvider>
				<div className="p-5">
					<Story />
				</div>
			</LazyThemeProvider>
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

export const Primary: StoryObj<ButtonProps> = {
	args: {
		children: 'Primary Button',
		variant: 'primary',
		size: 'md',
	},
};

export const Secondary: StoryObj<ButtonProps> = {
	args: {
		children: 'Secondary Button',
		variant: 'secondary',
		size: 'md',
	},
};

export const Outline: StoryObj<ButtonProps> = {
	args: {
		children: 'Outline Button',
		variant: 'outline',
		size: 'md',
	},
};

export const Disabled: StoryObj<ButtonProps> = {
	args: {
		children: 'Disabled Button',
		variant: 'primary',
		size: 'md',
		disabled: true,
	},
};

export const Pending: StoryObj<ButtonProps> = {
	args: {
		children: 'Pending...',
		variant: 'primary',
		size: 'md',
		disabled: true,
	},
};
