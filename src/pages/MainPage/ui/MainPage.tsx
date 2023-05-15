import { BrieflyDelivery } from "entities/Delivery";
import { Bestsellers } from "widgets/Bestsellers/ui/Bestsellers";
import { Categories } from "widgets/Categories";
import { Companies } from "widgets/Companies";
import { Counter } from "widgets/Counter";
import { Footer } from "widgets/Footer";
import { MainImage } from "widgets/MainImage";

const MainPage = () => {
    return (
        <div>
            <MainImage />
            <Bestsellers />
            {/* <Categories />
            <BrieflyDelivery />
            <Companies isTitle={true} /> */}
            <Footer />
        </div>
    );
}

export default MainPage