import { useNavigate } from 'react-router-dom';
import { IBouquet } from '../../model/types/bouquet';
import cls from './BouquetCard.module.scss';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ReactNode } from 'react';

interface BouquetCardProps {
    bouquet: IBouquet,
    liked?: ReactNode
}

export const BouquetCard: React.FC<BouquetCardProps> = (props) => {
    const {
        bouquet,
        liked
    } = props

    const navigate = useNavigate()

    return (
        <div className={cls.BouquetCard}>
            <div className={cls.img_container}>
                <img className={cls.img} src={bouquet.url} alt="" />
                {liked}
            </div>
            <div
                onClick={() => navigate(`${RoutePath.bouquet}${bouquet.id}`)}
                className={cls.text_container}
            >
                <h3 className={cls.title}>{bouquet.title}</h3>
                <p className={cls.price}>{bouquet.price}₽</p>
            </div>
        </div>
    );
}