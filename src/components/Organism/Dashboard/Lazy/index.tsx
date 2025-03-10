import { lazy } from 'react';

export const LazyDashboard = lazy(() =>
	import('../Dashboard').then((module) => ({ default: module.Dashboard })),
);
