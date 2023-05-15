import { Button } from "shared/ui/Button/Button";
import counterStore from "../model/store/counter";
import { observer } from "mobx-react-lite";

export const Counter = observer(() => {
    return (
        <div>
            <h1>{counterStore.counter.value}</h1>
            <Button onClick={() => counterStore.increment()}>
                increment
            </Button>
            <Button onClick={() => counterStore.decrement()}>
                decrement
            </Button>
        </div>
    );
})