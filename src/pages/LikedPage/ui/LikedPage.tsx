import { BouquetInBasket } from "entities/Bouquet";
import { likedStore } from "features/Liked";
import { observer } from "mobx-react-lite";
import cls from './LikedPage.module.scss'
import { Title } from "shared/ui/Title/Title";
import { Container } from "shared/ui/Container/Container";
import { Button } from "@mui/material";
import { ClearBasket } from "features/ClearBasket";


const LikedPage = observer(() => {

    const bouquets = likedStore.likedBouquet

    return (
        <div className={cls.LikedPage}>
            <Container flexDirectionRow={false}>
                <div className={cls.header}>
                    <div className={cls.title}>
                        <Title title="Вам понравилось" />
                    </div>
                    <ClearBasket />
                </div>
                {/* {bouquets.map(bouquet => 
                    <BouquetInBasket
                        key={bouquet.id}
                        bouquet={bouquet}
                        pages={'liked'}
                    />
                )} */}
            </Container>
        </div>
    );
})

export default LikedPage