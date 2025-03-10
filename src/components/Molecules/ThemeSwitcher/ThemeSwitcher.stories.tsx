import { Meta, StoryObj } from '@storybook/react';
import { LazyThemeSwitcher } from './Lazy';
import { LazyThemeProvider } from '../../Foundations/ThemeProvider/Lazy';

const metaThemeSwitcher: Meta<typeof LazyThemeSwitcher> = {
	title: 'Components/Molecules/ThemeSwitcher',
	component: LazyThemeSwitcher,
	decorators: [
		(Story) => (
			<LazyThemeProvider>
				<div className="p-5">
					<Story />
				</div>
			</LazyThemeProvider>
		),
	],
	tags: ['autodocs'],
};

export default metaThemeSwitcher;

export const Default: StoryObj<typeof LazyThemeSwitcher> = {};
