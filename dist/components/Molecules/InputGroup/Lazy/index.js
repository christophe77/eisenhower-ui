import { lazy } from 'react';
export const LazyInputGroup = lazy(() => import('../InputGroup').then((module) => ({ default: module.InputGroup })));
