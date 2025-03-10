import { ReactNode, FC } from 'react';

type Link = {
	rel: string;
	href: string;
};
type Meta = {
	name: string;
	content: string;
};
export interface HeadDocumentProps {
	title?: string;
	metas?: Meta[];
	links?: Link[];
	children?: ReactNode;
}
export const HeadDocument: FC<HeadDocumentProps> = ({
	title = '',
	metas,
	links,
	children,
}) => {
	return (
		<>
			<title>{title}</title>
			{links?.map((link, linkIndex) => (
				<link
					key={`${link.rel}-${linkIndex}`}
					rel={link.rel}
					href={link.href}
				/>
			))}
			{metas?.map((meta, metaIndex) => (
				<meta
					key={`${meta.name}-${metaIndex}`}
					name={meta.name}
					content={meta.content}
				/>
			))}
			{children}
		</>
	);
};
