import { BrieflyDelivery } from "entities/Delivery";
import { Bestsellers } from "widgets/Bestsellers/ui/Bestsellers";
import { Categories } from "widgets/Categories";
import { Footer } from "widgets/Footer";
import { MainImage } from "widgets/MainImage";

const MainPage = () => {
    return (
        <div>
            <MainImage />
            <Bestsellers />
            <Categories />
            <BrieflyDelivery />
            <Footer />
        </div>
    );
}

export default MainPage