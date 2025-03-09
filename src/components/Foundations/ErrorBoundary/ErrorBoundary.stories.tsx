import { Meta, StoryObj } from '@storybook/react';
import ErrorBoundary from './Lazy';

const metaErrorBoundary: Meta<typeof ErrorBoundary> = {
	title: 'Components/Foundations/ErrorBoundary',
	component: ErrorBoundary,
	decorators: [
		(Story) => (
			<ErrorBoundary componentName={"ErrorBoundary"}>
				<Story />
			</ErrorBoundary>
		),
	],
	tags: ['autodocs'],
};

export default metaErrorBoundary;

export const Default: StoryObj<typeof ErrorBoundary> = {};

export const WithoutError = () => (
	<div style={{ background: 'yellow', padding: '1rem' }}>
		Pas d'erreur c'est Lessieur
	</div>
);

export const WithError = () => {
	throw new Error('Oops, something went wrong!');
};
