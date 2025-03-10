import { lazy } from 'react';
export const LazyHeadDocument = lazy(() => import('../HeadDocument').then((module) => ({ default: module.HeadDocument })));
