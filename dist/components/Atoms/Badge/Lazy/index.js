import { lazy } from 'react';
export const LazyBadge = lazy(() => import('../Badge').then((module) => ({ default: module.Badge })));
