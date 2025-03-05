import { FC, ReactNode } from 'react';
import Header from '../../Molecules/Header/Header';
import { ThemeProvider } from '../../Foundations/ThemeProvider/ThemeProvider';
import HeadDocument from '../../Foundations/HeadDocument/HeadDocument';

interface BaseTemplateProps {
	title: string;
	children: ReactNode;
}

const BaseTemplate: FC<BaseTemplateProps> = ({ title, children }) => {
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
			<HeadDocument title={title} metas={metas} links={links} />
			<ThemeProvider>
				<div className="flex min-h-screen">
					<div className="flex flex-col flex-1">
						<Header title={title} items={items} />
						<main className="flex-1 p-6">{children}</main>
					</div>
				</div>
			</ThemeProvider>
		</>
	);
};
export default BaseTemplate;
