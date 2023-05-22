import { makeAutoObservable } from "mobx"

class totalBasket  {
    totalSummAllBouquets: number = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTotalSumm(summ: number) {
        this.totalSummAllBouquets += summ
    }

    decreaseTotalSumm(summ: number) {
        this.totalSummAllBouquets -= summ
    }
}

export const totalBasketStore = new totalBasket()