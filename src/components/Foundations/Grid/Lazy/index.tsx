import { lazy } from 'react';
import type { GridProps } from '../Grid';

export const LazyGrid = lazy(() =>
	import('../Grid').then((module) => ({ default: module.Grid })),
);

export type { GridProps };
