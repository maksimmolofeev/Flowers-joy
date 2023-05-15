import { Checkbox } from '@mui/material';
import cls from './Liked.module.scss';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

interface LikedProps {
    size?: number
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Liked: React.FC<LikedProps> = (props) => {
    const {
        size = 32
    } = props

    return (
        <div className={cls.liked}>
            <Checkbox
                {...label}
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
}