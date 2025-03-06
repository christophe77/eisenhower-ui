import { ReactNode } from "react";

type Link = {
	rel: string;
	href: string;
};
type Meta = {
	name: string;
	content: string;
};
interface HeadDocumentProps {
	title?: string;
	metas?: Meta[];
	links?: Link[];
	children?: ReactNode;
}
const HeadDocument = ({ title = '', metas, links, children }: HeadDocumentProps) => {
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
export default HeadDocument;
