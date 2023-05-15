import axios from 'axios';
import cls from './BouquetList.module.scss';
import { useEffect, useState, useCallback } from 'react';
import { BouquetCard, IBouquet } from 'entities/Bouquet';
import { observer } from 'mobx-react-lite';
import { categoriesStore } from 'entities/Category';

export const BouquetList = observer(() => {
    const URL = 'http://localhost:5000/bouquets';
    const CATEGORY = categoriesStore.activeCategory
    const [allBouquets, setAllBouquets] = useState<IBouquet[]>([])
    const [bouquetsByCategory, setBouquetsByCategory] = useState<IBouquet[]>([])

    const fetchBouquets = async () => {
        const response = await axios.get(URL)
        setAllBouquets(response.data)
        setBouquetsByCategory(response.data)
    }
    const sortBouquetByCategory = useCallback(() => {
        if (CATEGORY === null) {
            setBouquetsByCategory([...allBouquets])
        } else {
            const newBouquetsByCategory = allBouquets.filter(bouquet => 
                bouquet.categories.includes(categoriesStore.activeCategory.title)
            )
            setBouquetsByCategory([...newBouquetsByCategory])
        }
    }, [CATEGORY, allBouquets])

    useEffect(() => {
        fetchBouquets()
    }, [])

    useEffect(() => {
        sortBouquetByCategory()
    }, [sortBouquetByCategory])

    return (
        <div className={cls.BouquetList}>
            {bouquetsByCategory.map(bouquet =>
                <div key={bouquet.id} className={cls.bouquet_card}>
                    <BouquetCard bouquet={bouquet}/>
                </div>
            )}
        </div>
    );
})