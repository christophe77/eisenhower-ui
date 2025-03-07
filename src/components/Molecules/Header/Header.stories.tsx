import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { ThemeProvider } from '../../Foundations/ThemeProvider/ThemeProvider';

const metaHeader: Meta<typeof Header> = {
	title: 'Components/Molecules/Header',
	component: Header,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
	tags: ['autodocs'],
};

export default metaHeader;

export const Default: StoryObj<typeof Header> = {
	args: {
		title: 'Header Title',
		items: [
			{ name: 'Item with link', link: 'https://google.fr/' },
			{ name: 'Item without link' },
		],
	},
};
