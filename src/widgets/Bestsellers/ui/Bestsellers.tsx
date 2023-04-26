import { useEffect, useState } from 'react';
import cls from './Bestsellers.module.scss';
import axios from 'axios';
import { IBouquet } from 'entities/BouquetCard';
import { BouquetCard } from 'entities/BouquetCard/ui/BouquetCard';
import { Container } from 'shared/ui/Container/Container';

interface BestsellersProps {
}

export const Bestsellers: React.FC<BestsellersProps> = (props) => {

    const URL = 'http://localhost:5000/bestsellers';
    const [bestsellers, setBestsellers] = useState<IBouquet[]>([])

    const fetchBestsellers = async () => {
        try {
            const response = await axios.get(URL)
            setBestsellers(response.data)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        fetchBestsellers()
    }, [])

    return (
        <div className={cls.Bestsellers}>
            <Container>
                <h2 className={cls.title}>Бестселлеры</h2>
                <div className={cls.content}>
                    {bestsellers.map(bouquet =>
                        <BouquetCard key={bouquet.id} bouquet={bouquet} />
                    )}
                </div>
            </Container>
        </div>
    );
}