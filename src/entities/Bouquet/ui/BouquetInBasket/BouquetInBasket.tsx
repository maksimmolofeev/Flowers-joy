import cls from './BouquetInBasket.module.scss';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { IBouquet } from 'entities/Bouquet/model/types/bouquet';
import { basketStore } from 'features/AddBasket';
import { Text } from 'shared/ui/Text/Text';
import { totalBasketStore } from 'entities/TotalBasket';
import { Counter } from 'shared/ui/Counter/Counter';

interface BouquetInBasketProps {
    bouquet: IBouquet,
    pages?: 'liked' | 'basket'
}

export const BouquetInBasket: React.FC<BouquetInBasketProps> = observer((props) => {
    const {
        bouquet,
        pages = 'basket',
    } = props
    const navigate = useNavigate()

    const basketBouquets = basketStore.basketBouquetQuantity
    const [summBouquet, setSummBouquet] = useState(0)

    useEffect(() => {
        setSummBouquet(bouquet.price * basketBouquets[bouquet.id])
    }, [basketBouquets, bouquet])

    const increment = () => {
        basketStore.addBouquet(bouquet)
        setSummBouquet(bouquet.price * basketBouquets[bouquet.id])
    }

    const decrement = () => {
        basketStore.decreaseBouquet(bouquet)
        setSummBouquet(bouquet.price * basketBouquets[bouquet.id])
    }

    const removeBouquet = () => {
        basketStore.removeBouquet(bouquet)
    }

    return (
        <div className={cls.BouquetInBasket}>
            <img className={cls.img} src={bouquet.url} alt="" />
            <h3
                className={cls.title}
                onClick={() => navigate(`${RoutePath.bouquet}${bouquet.id}`)}
            >
                {bouquet.title}
            </h3>
            <div>
                <Counter
                    increment={increment}
                    decrement={decrement}
                    idBouquet={bouquet.id}
                    value={basketBouquets[bouquet.id]}
                />
                <p className={cls.price}>{bouquet.price}₽/шт</p>
            </div>
            <Text text={String(summBouquet)}/>
            <IconButton onClick={removeBouquet} aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </div>
    );
})