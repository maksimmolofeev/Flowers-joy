import cls from './Text.module.scss';

interface TextProps {
    text: string
}

export const Text: React.FC<TextProps> = (props) => {
    const {
        text
    } = props

    return (
        <div className={cls.Text}>
            {text}
        </div>
    );
}