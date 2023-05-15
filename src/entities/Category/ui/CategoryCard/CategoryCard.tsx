import { ICategory } from 'entities/Category';
import cls from './CategoryCard.module.scss';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface CategoryCardProps {
    category: ICategory,
}

export const CategoryCard: React.FC<CategoryCardProps> = (props) => {
    const {
        category
    } = props

    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(RoutePath.catalog)} className={cls.CategoryCard}>
            <img className={cls.img} src={category.url} alt="" />
            <div className={cls.dark}>
                <h3 className={cls.title}>{category.title}</h3>
            </div>
        </div>
    );
}