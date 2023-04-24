import { ReactNode } from 'react';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';

interface AppLinkProps extends LinkProps {
    children: ReactNode,
    to: string
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const {
        children,
        to,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            className={cls.AppLink}
            {...otherProps}
        >
            {children}
        </Link>
    );
}