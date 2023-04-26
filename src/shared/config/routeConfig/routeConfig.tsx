import { BouquetPage } from 'pages/BouquetPage';
import { CatalogPage } from 'pages/CatalogPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = 'main',
    CATALOG = 'catalog',
    BOUQUET = 'bouquet'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CATALOG]: '/catalog',
    [AppRoutes.BOUQUET]: '/catalog/'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.CATALOG]: {
        path: RoutePath.catalog,
        element: <CatalogPage />
    },
    [AppRoutes.BOUQUET]: {
        path: `${RoutePath.bouquet}:id`,
        element: <BouquetPage />
    },
}
