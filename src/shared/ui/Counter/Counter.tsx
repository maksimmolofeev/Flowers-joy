import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import cls from './Counter.module.scss';

interface CounterProps {
    value: number,
    idBouquet: number,
    increment: () => void,
    decrement: () => void
}

export const Counter: React.FC<CounterProps> = (props) => {
    const {
        value,
        idBouquet,
        decrement,
        increment
    } = props

    return (
        <div className={cls.Counter}>
            <IconButton onClick={() => decrement()}>
                <RemoveIcon sx={{width: 15, height: 15}}/>
            </IconButton>
            <p>{value}</p>
            <IconButton onClick={() => increment()}>
                <AddIcon sx={{width: 15, height: 15}}/>
            </IconButton>
        </div>
    );
}