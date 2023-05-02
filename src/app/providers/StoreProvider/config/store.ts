import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { counterReducer } from 'widgets/Counter'
import { categoriesReducer } from 'entities/Category'

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
            categories: categoriesReducer
        },
        preloadedState: initialState
    })
}
