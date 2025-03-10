import { Meta, StoryObj } from '@storybook/react';
import { LazyHeader, HeaderProps } from './Lazy';
import { LazyThemeProvider } from '../../Foundations/ThemeProvider/Lazy';

const metaHeader: Meta<HeaderProps> = {
	title: 'Components/Molecules/Header',
	component: LazyHeader,
	decorators: [
		(Story) => (
			<LazyThemeProvider>
				<Story />
			</LazyThemeProvider>
		),
	],
	tags: ['autodocs'],
};

export default metaHeader;

export const Default: StoryObj<HeaderProps> = {
	args: {
		title: 'Header Title',
		items: [
			{ name: 'Item with link', link: 'https://google.fr/' },
			{ name: 'Item without link' },
		],
	},
};
