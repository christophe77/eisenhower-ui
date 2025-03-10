import { lazy } from 'react';
import type { HeadDocumentProps } from '../HeadDocument';

export const LazyHeadDocument = lazy(() =>
	import('../HeadDocument').then((module) => ({ default: module.HeadDocument })),
);

export type { HeadDocumentProps };
