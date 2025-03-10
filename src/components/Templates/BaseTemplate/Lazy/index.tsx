import { lazy } from 'react';
import type { BaseTemplateProps } from '../BaseTemplate';

export const LazyBaseTemplate = lazy(() =>
	import('../BaseTemplate').then((module) => ({ default: module.BaseTemplate })),
);

export type { BaseTemplateProps };
