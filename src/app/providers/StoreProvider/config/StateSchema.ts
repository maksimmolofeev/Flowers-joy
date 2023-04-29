import { CategoriesSchema } from "widgets/Categories";
import { CounterSchema } from "widgets/Counter";

export interface StateSchema {
    counter: CounterSchema,
    categories: CategoriesSchema
}