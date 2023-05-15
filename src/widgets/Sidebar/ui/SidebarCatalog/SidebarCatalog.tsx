import { useEffect, useState } from 'react';
import cls from './SidebarCatalog.module.scss';
import { ICategory, categoriesStore } from 'entities/Category';
import axios from 'axios';
import { observer } from 'mobx-react-lite';

interface SidebarCatalogProps {
}

export const SidebarCatalog: React.FC<SidebarCatalogProps> = observer((props) => {

    const URL = 'http://localhost:5000/categories';
    const [categories, setCategories] = useState<ICategory[]>([])

    const fetchCategories = async () => {
        const response = await axios.get<ICategory[]>(URL)
        setCategories(response.data)
    }

    const changeActiveCategory = (category: ICategory) => {
        categoriesStore.changeCategory(category)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div className={cls.SidebarCatalog}>
            <h3 onClick={() => changeActiveCategory(null)}>Все букеты</h3>
            {categories.map(category => 
                <h3 onClick={() => changeActiveCategory(category)} key={category.id}>{category.title}</h3>
            )}
        </div>
    );
})