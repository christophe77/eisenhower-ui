import { lazy } from 'react';
import type { AvatarProps } from '../Avatar';

export const LazyAvatar = lazy(() =>
	import('../Avatar').then((module) => ({ default: module.Avatar })),
);

export type { AvatarProps };
