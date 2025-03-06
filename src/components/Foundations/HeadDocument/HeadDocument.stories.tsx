import { Meta, StoryObj } from '@storybook/react';
import HeadDocument from './HeadDocument';

const metaHeadDocument: Meta<typeof HeadDocument> = {
	title: 'Components/Foundations/HeadDocument',
	component: HeadDocument,
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
	<HeadDocument metas={metas} links={links}>
		<div className="block">
			Meta title : {document.getElementsByTagName('title').item.name}
			Meta description :{' '}
			{document.getElementsByTagName('description').item.name}
		</div>
	</HeadDocument>
);
