import { Meta, StoryObj } from '@storybook/react';
import { LazyAskGptChat } from './Lazy';

export default {
	title: 'components/Organisms/AskGptChat',
	component: LazyAskGptChat,
	decorators: [
		(Story) => (
			<div className="flex text-center p-10">
				<Story />
			</div>
		),
	],
} as Meta;

export const Default: StoryObj<typeof LazyAskGptChat> = {
	args: {
		REACT_APP_OPENAI_API_KEY: 'fakekey',
	},
};
