import { lazy } from 'react';
export const LazyToolTip = lazy(() => import('../ToolTip').then((module) => ({ default: module.Tooltip })));
