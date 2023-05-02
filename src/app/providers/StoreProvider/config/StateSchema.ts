import { CategoriesSchema } from "entities/Category";
import { CounterSchema } from "widgets/Counter";

export interface StateSchema {
    counter: CounterSchema,
    categories: CategoriesSchema
}