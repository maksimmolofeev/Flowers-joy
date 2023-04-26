import { useEffect, useState } from 'react';
import cls from './Bestsellers.module.scss';
import axios from 'axios';
import { IBouquet } from 'entities/BouquetCard';
import { BouquetCard } from 'entities/BouquetCard/ui/BouquetCard';
import { Container } from 'shared/ui/Container/Container';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { IconContext } from 'react-icons';
import { GrNext, GrPrevious } from 'react-icons/gr';

interface BestsellersProps {
}

export const Bestsellers: React.FC<BestsellersProps> = (props) => {

    const URL = 'http://localhost:5000/bestsellers';
    const [bestsellers, setBestsellers] = useState<IBouquet[]>([])
    const [offset, setOffset] = useState(0)

    const fetchBestsellers = async () => {
        try {
            const response = await axios.get(URL)
            setBestsellers(response.data)
        } catch (error) {
            alert(error)
        }
    }

    const increment = () => {
        if (offset < 0) {
            setOffset(offset => offset += 35)
        }
    }

    const decrement = () => {
        if (offset > -70) {
            setOffset(offset => offset -= 35)
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
                    <div className={cls.slider_line}>
                        {bestsellers.map(bouquet =>
                            <BouquetCard key={bouquet.id} bouquet={bouquet} />
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}