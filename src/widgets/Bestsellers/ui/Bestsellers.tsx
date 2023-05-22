import { useEffect, useState } from 'react';
import cls from './Bestsellers.module.scss';
import axios from 'axios';
import { Container } from 'shared/ui/Container/Container';
import { BouquetCard, IBouquet } from 'entities/Bouquet';
import { Liked } from 'features/Liked';

interface BestsellersProps {
}

export const Bestsellers: React.FC<BestsellersProps> = (props) => {

    const URL = 'http://localhost:5000/bouquets?bestsellers=true&_limit=5';
    const [bestsellers, setBestsellers] = useState<IBouquet[]>([])

    const fetchBestsellers = async () => {
        try {
            const response = await axios.get<IBouquet[]>(URL)
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
            <Container flexDirectionRow={false}>
                <h2 className={cls.title}>Бестселлеры</h2>
                <div className={cls.content}>
                    <div className={cls.slider_line}>
                        {bestsellers.map(bouquet =>
                            <div key={bouquet.id} className={cls.bouquet_card}>
                                <BouquetCard
                                    liked={<Liked size={26} bouquet={bouquet}/>}
                                    bouquet={bouquet}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}