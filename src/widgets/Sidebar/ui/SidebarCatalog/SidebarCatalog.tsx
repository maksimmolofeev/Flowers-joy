import { useEffect, useState } from 'react';
import cls from './SidebarCatalog.module.scss';
import { ICategory } from 'entities/Category';
import axios from 'axios';

interface SidebarCatalogProps {
}

export const SidebarCatalog: React.FC<SidebarCatalogProps> = (props) => {

    const URL = 'http://localhost:5000/categories';
    const [categories, setCategories] = useState<ICategory[]>([])

    const fetchCategories = async () => {
        const response = await axios.get(URL)
        setCategories(response.data)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div className={cls.SidebarCatalog}>
            {categories.map(category => 
                <h3 key={category.id}>{category.title}</h3>
            )}
        </div>
    );
}