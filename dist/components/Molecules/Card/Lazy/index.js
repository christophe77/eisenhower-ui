import { lazy } from 'react';
export const LazyCard = lazy(() => import('../Card').then((module) => ({ default: module.Card })));
