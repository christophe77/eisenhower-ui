import { lazy } from 'react';
import type { CardProps } from '../Card';

export const LazyCard = lazy(() =>
	import('../Card').then((module) => ({ default: module.Card })),
);

export type { CardProps };
