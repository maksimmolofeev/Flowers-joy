import cls from './Title.module.scss';

interface TitleProps {
    title: string
}

export const Title: React.FC<TitleProps> = (props) => {
    const {
        title
    } = props

    return (
        <div className={cls.Title}>
            {title}
        </div>
    );
}