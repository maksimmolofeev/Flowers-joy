import axios from 'axios';
import cls from './BouquetList.module.scss';
import { useEffect, useState } from 'react';
import { BouquetCard, IBouquet } from 'entities/Bouquet';
import { useSelector } from 'react-redux';
import { getActiveCategory } from 'entities/Category';

export const BouquetList = () => {
    const URL = 'http://localhost:5000/bouquets';
    const [allBouquets, setAllBouquets] = useState<IBouquet[]>([])
    const [bouquetsByCategory, setBouquetsByCategory] = useState<IBouquet[]>([])
    const activeCategory = useSelector(getActiveCategory)

    const fetchBouquets = async () => {
        const response = await axios.get(URL)
        setAllBouquets(response.data)
        setBouquetsByCategory(response.data)
    }

    const sortBouquetByCategory = () => {
        if (activeCategory === '') {
            setBouquetsByCategory([...allBouquets])
        } else {
            const newBouquetsByCategory = allBouquets.filter(bouquet => 
                bouquet.categories.includes(activeCategory)
            )
            setBouquetsByCategory([...newBouquetsByCategory])
        }
    }

    useEffect(() => {
        fetchBouquets()
    }, [])

    useEffect(() => {
        sortBouquetByCategory()
    }, [activeCategory])

    return (
        <div className={cls.BouquetList}>
            {bouquetsByCategory.map(bouquet =>
                <div key={bouquet.id} className={cls.bouquet_card}>
                    <BouquetCard bouquet={bouquet}/>
                </div>
            )}
        </div>
    );
}