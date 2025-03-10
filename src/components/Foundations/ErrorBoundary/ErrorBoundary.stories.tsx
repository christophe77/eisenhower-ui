import { Meta, StoryObj } from '@storybook/react';
import { LazyErrorBoundary, ErrorBoundaryProps } from './Lazy';

const metaErrorBoundary: Meta<ErrorBoundaryProps> = {
	title: 'Components/Foundations/ErrorBoundary',
	component: LazyErrorBoundary,
	decorators: [
		(Story) => (
			<LazyErrorBoundary componentName={'ErrorBoundary'}>
				<Story />
			</LazyErrorBoundary>
		),
	],
	tags: ['autodocs'],
};

export default metaErrorBoundary;

export const Default: StoryObj<ErrorBoundaryProps> = {};

export const WithoutError = () => (
	<div style={{ background: 'yellow', padding: '1rem' }}>
		Pas d'erreur c'est Lessieur
	</div>
);

export const WithError = () => {
	throw new Error('Oops, something went wrong!');
};
