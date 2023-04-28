import { Container } from 'shared/ui/Container/Container';
import cls from './Categories.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ICategory } from 'entities/Category';
import { CategoryCard } from 'entities/Category/ui/CategoryCard/CategoryCard';

interface CategoriesProps {
}

export const Categories: React.FC<CategoriesProps> = (props) => {

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
        <section className={cls.Categories}>
            <Container>
                <h2 className={cls.title}>Категории</h2>
                <div className={cls.content}>
                    {categories.map(category => 
                        <CategoryCard key={category.id} category={category}/>
                    )}
                </div>
            </Container>
        </section>
    );
}