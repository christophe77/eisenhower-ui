import { Meta, StoryObj } from '@storybook/react';
import { LazyLoginForm } from './Lazy';

const metaLoginForm: Meta<typeof LazyLoginForm> = {
	title: 'Components/Organisms/LoginForm',
	component: LazyLoginForm,
	tags: ['autodocs'],
};

export default metaLoginForm;

export const Default: StoryObj<typeof LazyLoginForm> = {};
