import { Meta, StoryObj } from '@storybook/react';
import AskGptChat from './Lazy';

export default {
	title: 'components/Organisms/AskGptChat',
	component: AskGptChat,
	decorators: [
		(Story) => (
			<div className="flex text-center p-10">
				<Story />
			</div>
		),
	],
} as Meta;

export const Default: StoryObj<typeof AskGptChat> = {
	args: {
		REACT_APP_OPENAI_API_KEY: 'fakekey',
	},
};
