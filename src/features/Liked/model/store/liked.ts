import { IBouquet } from 'entities/Bouquet';
import { makeAutoObservable } from 'mobx';
import { LIKED_LOCAL_STORAGE_KEY } from 'shared/const/localestorage';

class Liked {
    likedBouquet: IBouquet[] = JSON.parse(localStorage.getItem(LIKED_LOCAL_STORAGE_KEY)) || []

    constructor() {
        makeAutoObservable(this)
    }

    addBouquet(bouquet: IBouquet) {
        this.likedBouquet.push(bouquet)
        localStorage.setItem(LIKED_LOCAL_STORAGE_KEY, JSON.stringify(this.likedBouquet))
    }

    removeBouquet(id: number) {
        this.likedBouquet = this.likedBouquet.filter(bouquet => bouquet.id !== id)
        localStorage.setItem(LIKED_LOCAL_STORAGE_KEY, JSON.stringify(this.likedBouquet))
    }

    removeAllBouquet() {
        this.likedBouquet = []
        localStorage.setItem(LIKED_LOCAL_STORAGE_KEY, JSON.stringify(this.likedBouquet))
    }
}

export const likedStore = new Liked()