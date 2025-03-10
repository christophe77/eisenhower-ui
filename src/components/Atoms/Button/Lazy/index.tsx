import { lazy } from 'react';
import type { ButtonProps } from '../Button';

export const LazyButton = lazy(() =>
	import('../Button').then((module) => ({ default: module.Button })),
);

export type { ButtonProps };
