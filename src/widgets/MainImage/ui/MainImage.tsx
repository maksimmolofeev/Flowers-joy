import { Container } from 'shared/ui/Container/Container';
import cls from './MainImage.module.scss';
import MI from 'shared/assets/icons/MI.png'

interface MainImageProps {
}

export const MainImage: React.FC<MainImageProps> = (props) => {

    return (
        <div className={cls.MainImage}>
            <img className={cls.image} src={MI} alt="" />
            <div className={cls.text_content}>
                <div className={cls.text_block}>
                    <p className={cls.text}>Подарив цветы, ты даришь любовь, эмоции и прекрасное настроение</p>
                    <p className={cls.text}>Дари, люби, вдохновляй</p>
                </div>
                <div className={cls.title_content}>
                    <p className={cls.title}>FLOWERS</p>
                    <p className={cls.title}>JOY</p>
                </div>
                
            </div>
        </div>
    );
}