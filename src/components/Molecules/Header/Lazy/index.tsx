import { lazy } from 'react';
import type { HeaderProps } from '../Header';

export const LazyHeader = lazy(() =>
	import('../Header').then((module) => ({ default: module.Header })),
);

export type { HeaderProps };
