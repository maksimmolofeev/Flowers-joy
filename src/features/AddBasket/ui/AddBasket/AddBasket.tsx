import { Button } from '@mui/material';
import cls from './AddBasket.module.scss';
import { basketStore } from 'features/AddBasket/model/store/basket';
import { IBouquet } from 'entities/Bouquet';
import { useState } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface AddBasketProps {
    bouquet: IBouquet,
}

export const AddBasket: React.FC<AddBasketProps> = (props) => {
    const {
        bouquet,
    } = props

    const [isBasket, setIsBasket] = useState(false)

    const addBouquetInBasket = () => {
        basketStore.addBouquet(bouquet)
        setIsBasket(true)
    }

    return (
        isBasket ?
            <AppLink
                to={RoutePath.basket}
            >
                Перейти в корзину
            </AppLink>
            :
            <Button onClick={addBouquetInBasket} variant="text">Добавить в корзину</Button>
    );
}