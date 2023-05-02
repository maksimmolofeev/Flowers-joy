import { lazy } from 'react';

export const LikedPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./LikedPage')), 1500)
}));