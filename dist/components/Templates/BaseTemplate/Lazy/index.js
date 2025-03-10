import { lazy } from 'react';
export const LazyBaseTemplate = lazy(() => import('../BaseTemplate').then((module) => ({ default: module.BaseTemplate })));
