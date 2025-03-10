import { lazy } from 'react';
import type { InputProps } from '../Input';

export const LazyInput = lazy(() =>
	import('../Input').then((module) => ({ default: module.Input })),
);

export type { InputProps };
