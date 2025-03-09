import { Meta, StoryObj } from '@storybook/react';
import LanguageSwitcher from './Lazy';
import LanguageProvider from '../../Foundations/LanguageProvider/Lazy';

const metaLanguageSwitcher: Meta<typeof LanguageSwitcher> = {
	title: 'Components/Molecules/LanguageSwitcher',
	component: LanguageSwitcher,
	decorators: [
		(Story) => (
			<LanguageProvider>
				<div className="p-5">
					<Story />
				</div>
			</LanguageProvider>
		),
	],
	tags: ['autodocs'],
};

export default metaLanguageSwitcher;

export const Default: StoryObj<typeof LanguageSwitcher> = {};
