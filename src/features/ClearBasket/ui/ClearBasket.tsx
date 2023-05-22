import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import cls from './ClearBasket.module.scss';
import { likedStore } from 'features/Liked';
import { basketStore } from 'features/AddBasket';

interface ClearBasketProps {
}

export const ClearBasket: React.FC<ClearBasketProps> = (props) => {

    const clearBasket = () => {
        basketStore.removeAllBouquets()
    }
    return (
        <Button onClick={clearBasket} variant="text" startIcon={<DeleteIcon />}>
            Очистить
        </Button>
    );
}