import { Meta, StoryObj } from '@storybook/react';
import { Form, FormProps } from './Form';
import { LazyButton } from '../../Atoms/Button/Lazy';
import { LazyInput } from '../../Atoms/Input/Lazy';

function timeout(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const metaForm: Meta<FormProps> = {
	title: 'Components/Molecules/Form',
	component: Form,
	tags: ['autodocs'],
	argTypes: {
		action: () => {
			console.log('action');
		},
		children: {
			control: 'text',
		},
	},
};

export default metaForm;

export const Default: StoryObj<FormProps> = {
	args: {
		children: (
			<div>
				Name : <LazyInput type="text" />
				Tel : <LazyInput type="tel" />
			</div>
		),
	},
};

export const WithAction: StoryObj<FormProps> = {
	args: {
		children: (
			<div>
				Name : <LazyInput type="text" />
				Tel : <LazyInput type="tel" />
				<LazyButton type="submit">Submit</LazyButton>
			</div>
		),
		action: async (formData: FormData) => {
			await Promise.all([console.log(formData), timeout(5000)]);
		},
	},
};
