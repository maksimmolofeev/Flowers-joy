import cls from './Text.module.scss';

export enum TextSize {
    M = 'size_m',
    L = 'size_l'
}

interface TextProps {
    text: string,
    size?: TextSize
}

export const Text: React.FC<TextProps> = (props) => {
    const {
        text,
        size = TextSize.M
    } = props

    return (
        <div className={`${cls.Text} ${cls[size]}`}>
            {text}
        </div>
    );
}