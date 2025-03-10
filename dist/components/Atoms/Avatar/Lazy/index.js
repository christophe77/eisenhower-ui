import { lazy } from 'react';
export const LazyAvatar = lazy(() => import('../Avatar').then((module) => ({ default: module.Avatar })));
