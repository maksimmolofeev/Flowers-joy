import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    theme: ButtonTheme
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        children,
        theme,
        ...otherProps
    } = props

    return (
        <button
            className={`${cls.Button} ${cls[theme]}`}
            {...otherProps}
        >
            {children}
        </button>
    );
}