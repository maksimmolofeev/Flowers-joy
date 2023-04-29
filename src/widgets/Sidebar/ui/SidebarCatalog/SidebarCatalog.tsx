import { useEffect, useState } from 'react';
import cls from './SidebarCatalog.module.scss';
import { ICategory } from 'entities/Category';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { categoriesActions } from 'widgets/Categories/model/slice/categoriesSlice';

interface SidebarCatalogProps {
}

export const SidebarCatalog: React.FC<SidebarCatalogProps> = (props) => {

    const dispatch = useDispatch();
    const URL = 'http://localhost:5000/categories';
    const [categories, setCategories] = useState<ICategory[]>([])

    const fetchCategories = async () => {
        const response = await axios.get(URL)
        setCategories(response.data)
    }

    const changeActiveCategory = (category: string) => {
        dispatch(categoriesActions.changeCategory(category))
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div className={cls.SidebarCatalog}>
            <h3 onClick={() => changeActiveCategory('')}>Все букеты</h3>
            {categories.map(category => 
                <h3 onClick={() => changeActiveCategory(category.title)} key={category.id}>{category.title}</h3>
            )}
        </div>
    );
}