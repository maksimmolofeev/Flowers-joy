import { makeAutoObservable } from "mobx"

class Counter {
    counter = {
        value: 0
    }
    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.counter.value = this.counter.value + 1
    }

    decrement() {
        this.counter.value = this.counter.value - 1
    }
}

export default new Counter