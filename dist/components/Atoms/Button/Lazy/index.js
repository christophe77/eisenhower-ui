import { lazy } from 'react';
export const LazyButton = lazy(() => import('../Button').then((module) => ({ default: module.Button })));
