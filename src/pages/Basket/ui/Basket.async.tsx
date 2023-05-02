import { lazy } from 'react';

export const BasketAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./Basket')), 1500)
}));