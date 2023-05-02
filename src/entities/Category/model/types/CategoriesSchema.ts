import { ICategory } from 'entities/Category';

export interface CategoriesSchema {
    categories: ICategory[],
    activeCategory: string
}