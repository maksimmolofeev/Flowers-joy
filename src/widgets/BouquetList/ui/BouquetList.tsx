import axios from 'axios';
import cls from './BouquetList.module.scss';
import { useEffect, useState } from 'react';
import { BouquetCard, IBouquet } from 'entities/Bouquet';

interface BouquetListProps {
}

export const BouquetList: React.FC<BouquetListProps> = (props) => {
    const URL = 'http://localhost:5000/bouquets';
    const [bouquets, setBouquets] = useState<IBouquet[]>([])

    const fetchBouquets = async () => {
        const response = await axios.get(URL)
        setBouquets(response.data)
    }

    useEffect(() => {
        fetchBouquets()
    }, [])
    
    return (
        <div className={cls.BouquetList}>
            {bouquets.map(bouquet =>
                <div key={bouquet.id} className={cls.bouquet_card}>
                    <BouquetCard bouquet={bouquet}/>
                </div>
            )}
        </div>
    );
}