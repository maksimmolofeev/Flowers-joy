import { BouquetInBasket } from "entities/Bouquet";
import { ClearBasket } from "features/ClearBasket";
import { Title } from "shared/ui/Title/Title";
import cls from './Basket.module.scss';
import { basketStore } from "features/AddBasket/model/store/basket";
import { observer } from "mobx-react-lite";
import { TotalBasket } from "entities/TotalBasket";
import { Container } from "@mui/material";

const Basket = observer(() => {
    const bouquets = basketStore.basketBouquet
    return (
        <Container>
            <div className={cls.Basket}>
                <div className={cls.bouquets}>
                    <div className={cls.header}>
                        <div className={cls.title}>
                            <Title title="Корзина" />
                        </div>
                        <ClearBasket />
                    </div>
                    {
                        bouquets.length === 0 ?
                            <div className={cls.titleEmpty}>
                                <Title title='Корзина пуста'/>
                            </div>
                            :
                            bouquets.map(bouquet => 
                                <BouquetInBasket
                                    key={bouquet.id}
                                    bouquet={bouquet}
                                />
                            )
                    }
                </div>
                <TotalBasket />
            </div>
        </Container>
    );
})

export default Basket