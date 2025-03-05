import { Meta, StoryObj } from '@storybook/react';
import Form from './Form';
import Button from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input/Input';

function timeout(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const metaForm: Meta<typeof Form> = {
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

export const Default: StoryObj<typeof Form> = {
	args: {
		children: (
			<div>
				Name : <Input type="text" />
				Tel : <Input type="tel" />
			</div>
		),
	},
};

export const WithAction: StoryObj<typeof Form> = {
	args: {
		children: (
			<div>
				Name : <Input type="text" />
				Tel : <Input type="tel" />
				<Button type="submit">Submit</Button>
			</div>
		),
		action: async (formData: FormData) => {
			await Promise.all([console.log(formData), timeout(5000)]);
		},
	},
};
