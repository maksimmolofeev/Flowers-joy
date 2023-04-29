import { BouquetList } from "widgets/BouquetList";
import { SidebarCatalog } from "widgets/Sidebar";
import cls from './CatalogPage.module.scss'

const CatalogPage = () => {
    return (
        <div className={cls.content_page}>
            <SidebarCatalog />
            <BouquetList />
        </div>
    );
}

export default CatalogPage