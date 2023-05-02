import { ReactNode } from 'react';
import cls from './Container.module.scss';

interface ContainerProps {
    children: ReactNode,
    flexDirectionRow?: boolean,
    justifyContentCenter?: boolean
}

export const Container: React.FC<ContainerProps> = (props) => {
    const {
        children,
        flexDirectionRow = true,
        justifyContentCenter = false
    } = props

    return (
        <div
            className={`${cls.Container}
            ${flexDirectionRow ? null : `${cls.column}`}
            ${justifyContentCenter ? `${cls.center}` : null}`}
        >
            {children}
        </div>
    );
}