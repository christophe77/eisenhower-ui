import { lazy } from 'react';
import type { IconButtonProps } from '../IconButton';

export const LazyIconButton = lazy(() =>
	import('../IconButton').then((module) => ({ default: module.IconButton })),
);

export type { IconButtonProps };
