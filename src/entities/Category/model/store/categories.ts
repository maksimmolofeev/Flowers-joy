import { makeAutoObservable } from 'mobx';
import { ICategory } from "../types/category";

class Categories {
    categories: ICategory[] = [];
    activeCategory: ICategory | null = null

    constructor() {
        makeAutoObservable(this)
    }
    changeCategory(category: ICategory) {
        this.activeCategory = category
    } 
}

export const categoriesStore = new Categories()