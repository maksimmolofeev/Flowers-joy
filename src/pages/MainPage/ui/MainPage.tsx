import { Bestsellers } from "widgets/Bestsellers/ui/Bestsellers";
import { Categories } from "widgets/Categories";
import { MainImage } from "widgets/MainImage";

const MainPage = () => {
    return (
        <div>
            <MainImage />
            <Bestsellers />
            <Categories />
        </div>
    );
}

export default MainPage