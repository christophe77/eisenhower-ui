import { lazy } from 'react';
import type { ErrorBoundaryProps } from '../ErrorBoundary';

export const LazyErrorBoundary = lazy(() =>
	import('../ErrorBoundary').then((module) => ({ default: module.ErrorBoundary })),
);

export type { ErrorBoundaryProps };
