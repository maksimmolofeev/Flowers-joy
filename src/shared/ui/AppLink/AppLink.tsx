import { ReactNode } from 'react';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

export enum LinkTheme {
    ICON = 'icon',
    TEXT = 'text'
}

interface AppLinkProps extends LinkProps {
    children: ReactNode,
    to: string,
    theme?: LinkTheme
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const {
        children,
        to,
        theme = LinkTheme.TEXT,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={cls[theme]}
            {...otherProps}
        >
            {children}
        </Link>
    );
}