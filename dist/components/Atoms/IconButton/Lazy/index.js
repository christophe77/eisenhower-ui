import { lazy } from 'react';
export const LazyIconButton = lazy(() => import('../IconButton').then((module) => ({ default: module.IconButton })));
