import { Container } from 'shared/ui/Container/Container';
import cls from './Categories.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ICategory } from 'entities/Category';
import { CategoryCard } from 'entities/Category/ui/CategoryCard/CategoryCard';
import { useDispatch } from 'react-redux';
import { categoriesActions } from '../model/slice/categoriesSlice';

interface CategoriesProps {
}

export const Categories: React.FC<CategoriesProps> = (props) => {
    const dispatch = useDispatch()
    const URL = 'http://localhost:5000/categories';
    const [categories, setCategories] = useState<ICategory[]>([])

    const fetchCategories = async () => {
        const response = await axios.get(URL)
        setCategories(response.data)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const changeActiveCategory = (category: string) => {
        dispatch(categoriesActions.changeCategory(category))
    }

    return (
        <section className={cls.Categories}>
            <Container>
                <h2 className={cls.title}>Категории</h2>
                <div className={cls.content}>
                    {categories.map(category => 
                        <CategoryCard
                            changeActiveCategory={changeActiveCategory}
                            key={category.id} 
                            category={category}
                        />
                    )}
                </div>
            </Container>
        </section>
    );
}