import { lazy } from 'react';
import type { BadgeProps } from '../Badge';

export const LazyBadge = lazy(() =>
	import('../Badge').then((module) => ({ default: module.Badge })),
);

export type { BadgeProps };
