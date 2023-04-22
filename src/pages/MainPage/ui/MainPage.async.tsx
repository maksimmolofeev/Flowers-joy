import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // Имитация асинхронности
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));