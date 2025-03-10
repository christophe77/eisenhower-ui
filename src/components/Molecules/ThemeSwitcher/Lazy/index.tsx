import { lazy } from 'react';

export const LazyThemeSwitcher = lazy(() =>
	import('../ThemeSwitcher').then((module) => ({ default: module.ThemeSwitcher })),
);
