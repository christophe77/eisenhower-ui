import { lazy } from 'react';
import type { FormProps } from '../Form';

export const LazyForm = lazy(() =>
	import('../Form').then((module) => ({ default: module.Form })),
);

export type { FormProps };
