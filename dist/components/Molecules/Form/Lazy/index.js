import { lazy } from 'react';
export const LazyForm = lazy(() => import('../Form').then((module) => ({ default: module.Form })));
