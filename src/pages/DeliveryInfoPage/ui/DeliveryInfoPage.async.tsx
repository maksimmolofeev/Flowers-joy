import { lazy } from 'react';

export const DeliveryInfoPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./DeliveryInfoPage')), 1500)
}));