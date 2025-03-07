import { Meta, StoryObj } from '@storybook/react';
import ThemeSwitcher from './ThemeSwitcher';
import { ThemeProvider } from '../../Foundations/ThemeProvider/ThemeProvider';

const metaThemeSwitcher: Meta<typeof ThemeSwitcher> = {
	title: 'Components/Molecules/ThemeSwitcher',
	component: ThemeSwitcher,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<div className="p-5">
					<Story />
				</div>
			</ThemeProvider>
		),
	],
	tags: ['autodocs'],
};

export default metaThemeSwitcher;

export const Default: StoryObj<typeof ThemeSwitcher> = {};
