import { Bestsellers } from "widgets/Bestsellers/ui/Bestsellers";
import { Counter } from "widgets/Counter";
import { MainImage } from "widgets/MainImage";

const MainPage = () => {
    return (
        <div>
            <MainImage />
            <Bestsellers />
        </div>
    );
}

export default MainPage