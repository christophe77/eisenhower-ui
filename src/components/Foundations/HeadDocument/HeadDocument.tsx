interface HeadDocumentProps {
	title?: string;
	metas?: { name: string; content: string }[];
	links?: { rel: string; href: string }[];
}
const HeadDocument = ({
	title = 'eisenhower-ui',
	metas,
	links,
}: HeadDocumentProps) => {
	return (
		<>
			<title>{title}</title>
			{links?.map((link, linkIndex) => (
				<link
					key={`${link.href}-${linkIndex}`}
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
		</>
	);
};
export default HeadDocument;
