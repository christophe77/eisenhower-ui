import { lazy } from 'react';
export const LazyInput = lazy(() => import('../Input').then((module) => ({ default: module.Input })));
