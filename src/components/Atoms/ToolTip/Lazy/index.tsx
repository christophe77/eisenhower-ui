import { lazy } from 'react';
import type { ToolTipProps } from '../ToolTip';

export const LazyToolTip = lazy(() =>
	import('../ToolTip').then((module) => ({ default: module.Tooltip })),
);

export type { ToolTipProps };
