import { Checkbox } from '@mui/material';
import cls from './Liked.module.scss';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { likedStore } from '../model/store/liked';
import { IBouquet } from 'entities/Bouquet';
import { observer } from 'mobx-react-lite';

interface LikedProps {
    bouquet: IBouquet,
    size?: number
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Liked: React.FC<LikedProps> = observer((props) => {
    const {
        size = 32,
        bouquet
    } = props
    const [checked, setChecked] = useState(false)
    const likedBouquet = likedStore.likedBouquet

    const changeCheckbox = () => {
        setChecked(prev => !prev)
        checked ? likedStore.removeBouquet(bouquet.id) : likedStore.addBouquet(bouquet)
    }

    useEffect(() => {
        if(bouquet !== null && likedBouquet.some((item => item.id === bouquet.id))) {
            setChecked(true)
        }
    }, [bouquet, likedBouquet])
    
    return (
        <div className={cls.liked}>
            <Checkbox
                {...label}
                checked = {checked}
                onClick={changeCheckbox}
                sx={{ 
                    '& .MuiSvgIcon-root': { fontSize: size },
                    color: '#FFFFFF',
                    '&.Mui-checked': {
                        color: '#ff0000',
                    },
                }}
                icon={<Favorite />}
                checkedIcon={<Favorite />}
            />
        </div>
        
    );
})