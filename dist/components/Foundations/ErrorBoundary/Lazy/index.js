import { lazy } from 'react';
export const LazyErrorBoundary = lazy(() => import('../ErrorBoundary').then((module) => ({ default: module.ErrorBoundary })));
