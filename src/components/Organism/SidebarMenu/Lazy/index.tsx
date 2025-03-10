import { lazy } from 'react';

export const LazySidebarMenu = lazy(() =>
	import('../SidebarMenu').then((module) => ({ default: module.SidebarMenu })),
);

