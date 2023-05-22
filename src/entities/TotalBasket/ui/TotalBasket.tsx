import { Title } from 'shared/ui/Title/Title';
import cls from './TotalBasket.module.scss';
import { Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { totalBasketStore } from '../model/store/totalBasket';
import { basketStore } from 'features/AddBasket';
import { useCallback, useEffect, useState } from 'react';

export const TotalBasket = observer(() => {
    // const [totalSumm, setTotalSumm] = useState(0)
    // const bouquets = basketStore.basketBouquet
    // const bouquetsValue = basketStore.basketBouquetQuantity

    // const calcTotalSumm = useCallback(() => {
    //     const initialValue = 0
    //     const summ = bouquets.reduce(
    //         (accumulator, currentValue) => 
    //             accumulator + currentValue.price * bouquetsValue[currentValue.id],
    //         initialValue
    //     )
    //     setTotalSumm(summ)
    // }, [bouquets, bouquetsValue])

    // useEffect(() => {
    //     calcTotalSumm()
    // }, [calcTotalSumm])
    return (
        <div className={cls.TotalBasket}>
            <div>
                <Title title='Итого:'/>
                <p>{basketStore.total}</p>
            </div>
            <Button sx={{height: 50}} variant="contained">Перейти к оформлению</Button>
        </div>
    );
})