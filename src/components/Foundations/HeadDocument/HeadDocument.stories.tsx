import { Meta, StoryObj } from '@storybook/react';
import { LazyHeadDocument, HeadDocumentProps } from './Lazy';

const metaHeadDocument: Meta<HeadDocumentProps> = {
	title: 'Components/Foundations/HeadDocument',
	component: LazyHeadDocument,
	argTypes: {
		title: { control: 'text', defaultValue: 'eisenhower-ui' },
		metas: [],
		links: [],
	},
	tags: ['autodocs'],
};

export default metaHeadDocument;

export const Default: StoryObj<typeof metaHeadDocument> = {};

const metas = [{ name: 'description', content: 'Eisenhower ui design system' }];
const links = [
	{ rel: 'stylesheet', href: 'styles.css' },
	{ rel: 'canonical', href: 'https://example.com/page' },
];

export const WithMetas = () => (
	<LazyHeadDocument metas={metas} links={links}>
		<div className="block">
			Meta title : {document.getElementsByTagName('title').item.name}
			Meta description :{' '}
			{document.getElementsByTagName('description').item.name}
		</div>
	</LazyHeadDocument>
);
