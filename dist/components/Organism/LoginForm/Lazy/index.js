import { lazy } from 'react';
export const LazyLoginForm = lazy(() => import('../LoginForm').then((module) => ({ default: module.LoginForm })));
