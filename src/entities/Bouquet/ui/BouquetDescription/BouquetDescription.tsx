import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { IBouquet } from '../../model/types/bouquet';
import cls from './BouquetDescription.module.scss';

interface BouquetDescriptionProps {
    bouquet: IBouquet
}

export const BouquetDescription: React.FC<BouquetDescriptionProps> = (props) => {
    const {
        bouquet
    } = props

    return (
        <section className={cls.BouquetDescription}>
            <div>
                <img src={bouquet?.url} alt="" />
            </div>
            <div>
                <h1>{bouquet?.title}</h1>
                <p>{bouquet?.price}</p>
                <Button theme={ButtonTheme.OUTLINE}>
                    Заказать
                </Button>
            </div>
        </section>
    );
}