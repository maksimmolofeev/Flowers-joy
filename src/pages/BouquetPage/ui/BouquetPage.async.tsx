import { lazy } from 'react';

export const BouquetPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./BouquetPage')), 1500)
}));