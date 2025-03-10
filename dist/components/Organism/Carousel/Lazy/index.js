import { lazy } from 'react';
export const LazyCarousel = lazy(() => import('../Carousel').then((module) => ({ default: module.Carousel })));
