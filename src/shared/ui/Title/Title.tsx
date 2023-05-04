import cls from './Title.module.scss';


export enum TitleSize {
    L = 'size_l',
    XL = 'size_xl',
}

interface TitleProps {
    title: string,
    size?: TitleSize 
}

export const Title: React.FC<TitleProps> = (props) => {
    const {
        title,
        size = TitleSize.XL
    } = props

    return (
        <div className={cls[size]}>
            {title}
        </div>
    );
}