import { lazy } from 'react';
import type { ThemeProviderProps } from '../ThemeProvider';

export const LazyThemeProvider = lazy(() =>
	import('../ThemeProvider').then((module) => ({ default: module.ThemeProvider })),
);

export type { ThemeProviderProps };
