import { lazy } from 'react';
import type { InputGroupProps } from '../InputGroup';

export const LazyInputGroup = lazy(() =>
	import('../InputGroup').then((module) => ({ default: module.InputGroup })),
);

export type { InputGroupProps };
