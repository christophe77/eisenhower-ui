import { Meta, StoryObj } from '@storybook/react';
import { LanguageSwitcherProps, LazyLanguageSwitcher } from './Lazy';
import { LazyLanguageProvider } from '../../Foundations/LanguageProvider/Lazy';

const metaLanguageSwitcher: Meta<LanguageSwitcherProps> = {
	title: 'Components/Molecules/LanguageSwitcher',
	component: LazyLanguageSwitcher,
	decorators: [
		(Story) => (
			<LazyLanguageProvider>
				<div className="p-5">
					<Story />
				</div>
			</LazyLanguageProvider>
		),
	],
	tags: ['autodocs'],
};

export default metaLanguageSwitcher;

export const Default: StoryObj<LanguageSwitcherProps> = {
	args: {
		languageList: [
			{ code: 'fr', name: 'Français' },
			{ code: 'en', name: 'English' },
		],
	},
};
