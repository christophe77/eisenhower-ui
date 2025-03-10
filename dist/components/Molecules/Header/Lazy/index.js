import { lazy } from 'react';
export const LazyHeader = lazy(() => import('../Header').then((module) => ({ default: module.Header })));
