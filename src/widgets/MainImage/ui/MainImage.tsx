import { Container } from 'shared/ui/Container/Container';
import cls from './MainImage.module.scss';
import MI from 'shared/assets/icons/MI.png'
import { useEffect, useState } from 'react';

interface MainImageProps {
}

export const MainImage: React.FC<MainImageProps> = (props) => {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = (e: any) => {
            setWidth(e.target.innerWidth)
        }
        window.addEventListener('resize', handleResize);
    }, [width])


    return (
        <div className={cls.MainImage}>
            <img className={cls.image} src={MI} alt="" />
            {
                width > 1800 
                ? null
                :
                <div className={cls.text_content}>
                    <div className={cls.text_block}>
                        <p className={cls.text}>Подарив цветы, ты даришь любовь, эмоции и прекрасное настроение</p>
                        <p className={cls.text}>Дари, люби, вдохновляй</p>
                    </div>
                    <div className={cls.title_block}>
                        <p className={cls.title}>FLOWERS</p>
                        <p className={cls.title}>JOY</p>
                    </div>
                </div>
            }
        </div>
    );
}