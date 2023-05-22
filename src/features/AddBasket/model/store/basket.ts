import { IBouquet } from "entities/Bouquet";
import { makeAutoObservable } from "mobx";
import { BASKET_LOCAL_STORAGE_KEY, BASKET_QUANTITY_LOCAL_STORAGE_KEY } from "shared/const/localestorage";
import { IBasket } from "../types/IBasket";

class basket {
    basketBouquetQuantity: IBasket = JSON.parse(localStorage.getItem(BASKET_QUANTITY_LOCAL_STORAGE_KEY)) || {}
    basketBouquet: IBouquet[] = JSON.parse(localStorage.getItem(BASKET_LOCAL_STORAGE_KEY)) || []
    constructor() {
        makeAutoObservable(this)
    }

    addBouquet(bouquet: IBouquet) {
        if(this.basketBouquetQuantity[bouquet.id] === undefined) {
            this.basketBouquetQuantity[bouquet.id] = 0
            this.basketBouquet.push(bouquet)
            localStorage.setItem(BASKET_LOCAL_STORAGE_KEY, JSON.stringify(this.basketBouquet))
        }
        this.basketBouquetQuantity[bouquet.id] += 1
        localStorage.setItem(BASKET_QUANTITY_LOCAL_STORAGE_KEY, JSON.stringify(this.basketBouquetQuantity))
    }

    decreaseBouquet(bouquet: IBouquet) {
        this.basketBouquetQuantity[bouquet.id] -= 1
        if(this.basketBouquetQuantity[bouquet.id] < 1) {
            delete this.basketBouquetQuantity[bouquet.id]
            this.basketBouquet = this.basketBouquet.filter(element => element !== bouquet)
            localStorage.setItem(BASKET_LOCAL_STORAGE_KEY, JSON.stringify(this.basketBouquet))
        }
        localStorage.setItem(BASKET_QUANTITY_LOCAL_STORAGE_KEY, JSON.stringify(this.basketBouquetQuantity))
    }

    removeBouquet(bouquet: IBouquet) {
        delete this.basketBouquetQuantity[bouquet.id]
        this.basketBouquet = this.basketBouquet.filter(element => element !== bouquet)
        localStorage.setItem(BASKET_QUANTITY_LOCAL_STORAGE_KEY, JSON.stringify(this.basketBouquetQuantity))
        localStorage.setItem(BASKET_LOCAL_STORAGE_KEY, JSON.stringify(this.basketBouquet))
    }

    removeAllBouquets() {
        this.basketBouquetQuantity = {}
        this.basketBouquet = []
        localStorage.setItem(BASKET_LOCAL_STORAGE_KEY, JSON.stringify(this.basketBouquet))
        localStorage.setItem(BASKET_QUANTITY_LOCAL_STORAGE_KEY, JSON.stringify(this.basketBouquetQuantity))
    }

    get total() {
        return this.basketBouquet.reduce(
            (accumulator: number, currentValue: IBouquet) => 
                accumulator + currentValue.price * this.basketBouquetQuantity[currentValue.id],
            0
        )
    }
}

export const basketStore = new basket()