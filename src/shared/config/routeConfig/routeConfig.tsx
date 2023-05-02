import { Basket } from 'pages/Basket';
import { BouquetPage } from 'pages/BouquetPage';
import { CatalogPage } from 'pages/CatalogPage';
import { DeliveryInfoPage } from 'pages/DeliveryInfoPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = 'main',
    CATALOG = 'catalog',
    BOUQUET = 'bouquet',
    DELIVERY_INFO = 'delivery_info',
    BASKET = 'basket'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CATALOG]: '/catalog',
    [AppRoutes.BOUQUET]: '/catalog/',
    [AppRoutes.DELIVERY_INFO]: '/delivery_info',
    [AppRoutes.BASKET]: '/basket'
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
    [AppRoutes.DELIVERY_INFO]: {
        path: RoutePath.delivery_info,
        element: <DeliveryInfoPage />
    },
    [AppRoutes.BASKET]: {
        path: RoutePath.basket,
        element: <Basket />
    }
}
