import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { IBouquet } from '../../model/types/bouquet';
import cls from './BouquetDescription.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';

interface BouquetDescriptionProps {
    bouquet: IBouquet
}

export const BouquetDescription: React.FC<BouquetDescriptionProps> = (props) => {
    const {
        bouquet
    } = props

    return (
        <section className={cls.BouquetDescription}>
            <div className={cls.return_catalog}>
                <AppLink to={RoutePath.catalog}>
                    {'<- перейти в каталог'}
                </AppLink>
            </div>
            <div className={cls.content}>
                <div className={cls.img_wrapper}>
                    <img className={cls.img} src={bouquet?.url} alt="" />
                </div>
                <div className={cls.text_content}>
                    <h1 className={cls.title}>{bouquet?.title}</h1>
                    <p>{bouquet?.price}</p>
                    <Button theme={ButtonTheme.OUTLINE}>
                        Заказать
                    </Button>
                    <p>Состав: какой-то цветок</p>
                </div>
            </div>
        </section>
    );
}