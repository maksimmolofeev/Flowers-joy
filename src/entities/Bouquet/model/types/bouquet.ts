export interface IBouquet {
    id: number,
    title: string,
    price: number,
    url: string,
    categories: string[],
    liked: boolean,
    bestsellers: boolean
}
