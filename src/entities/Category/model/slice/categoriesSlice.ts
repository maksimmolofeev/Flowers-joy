import { createSlice } from '@reduxjs/toolkit'
import { CategoriesSchema } from '../types/CategoriesSchema'

const initialState: CategoriesSchema = {
    categories: [],
    activeCategory: ''
}

export const counterSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        changeCategory: (state, action) => {
            state.activeCategory = action.payload
        }
    },
})

export const { actions: categoriesActions } = counterSlice
export const { reducer: categoriesReducer } = counterSlice

