import { lazy } from 'react';
export const LazyGrid = lazy(() => import('../Grid').then((module) => ({ default: module.Grid })));
