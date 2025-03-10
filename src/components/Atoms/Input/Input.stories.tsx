import type { Meta, StoryObj } from '@storybook/react';
import {LazyInput, InputProps} from './Lazy';

const metaInput: Meta<InputProps> = {
	title: 'Components/Atoms/Input',
	component: LazyInput,
	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<div className="p-2 h-[120px] mb-5">
				<Story />
			</div>
		),
	],
	argTypes: {
		type: {
			control: 'select',
			options: [
				'text',
				'email',
				'password',
				'number',
				'checkbox',
				'radio',
				'file',
			],
		},
		label: { control: 'text' },
		error: { control: 'text' },
		success: { control: 'boolean' },
		fullWidth: { control: 'boolean' },
	},
};

export default metaInput;
type Story = StoryObj<InputProps>;

export const Default: Story = {
	args: {
		label: 'Nom',
		placeholder: 'Entrez votre nom...',
	},
};

export const WithError: Story = {
	args: {
		label: 'Email',
		type: 'email',
		placeholder: 'Entrez votre email...',
		error: 'Adresse email invalide',
	},
};

export const Password: Story = {
	args: {
		label: 'Mot de passe',
		type: 'password',
		placeholder: 'Entrez votre mot de passe...',
	},
};

export const Checkbox: Story = {
	args: {
		label: "J'accepte les termes et conditions",
		type: 'checkbox',
	},
};

export const Radio: Story = {
	args: {
		label: 'Option 1',
		type: 'radio',
		name: 'options',
	},
};

export const WithIcon: Story = {
	args: {
		label: 'Recherche',
		type: 'text',
		placeholder: 'Rechercher...',
		icon: '🔍',
	},
};
