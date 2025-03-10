import { FC, ReactNode } from 'react';
import { LazyHeader } from '../../Molecules/Header/Lazy';
import { LazyThemeProvider } from '../../Foundations/ThemeProvider/Lazy';
import { LazyHeadDocument } from '../../Foundations/HeadDocument/Lazy';
import { designTokens } from '../../../theme/designTokens';
import useTheme from '../../Foundations/ThemeProvider/useTheme';

export interface BaseTemplateProps {
	title: string;
	children: ReactNode;
}

export const BaseTemplate: FC<BaseTemplateProps> = ({ title, children }) => {
	const { isDarkMode } = useTheme();

	const items = [
		{ name: 'Item with link', link: 'https://google.fr/' },
		{ name: 'Item without link' },
	];
	const metas = [
		{ name: 'description', content: 'Eisenhower ui design system' },
	];
	const links = [
		{ rel: 'stylesheet', href: 'styles.css' },
		{ rel: 'canonical', href: 'https://example.com/page' },
	];
	return (
		<>
			<LazyHeadDocument title={title} metas={metas} links={links} />
			<LazyThemeProvider>
				<div
					className={`flex min-h-screen bg-[${isDarkMode ? designTokens.darkMode.background : designTokens.colors.background}]`}
				>
					<div className="flex flex-col flex-1">
						<LazyHeader title={title} items={items} />
						<main className="flex-1 p-6">{children}</main>
					</div>
				</div>
			</LazyThemeProvider>
		</>
	);
};
