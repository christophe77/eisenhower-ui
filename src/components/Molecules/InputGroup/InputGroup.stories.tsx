import { Meta, StoryObj } from '@storybook/react';
import { LazyInputGroup, InputGroupProps } from './Lazy';

const metaInputGroup: Meta<InputGroupProps> = {
	title: 'Components/Molecules/InputGroup',
	component: LazyInputGroup,
};

export default metaInputGroup;

export const Default: StoryObj<InputGroupProps> = {
	args: {
		placeholder: 'Enter text...',
		buttonText: 'Submit',
	},
};
