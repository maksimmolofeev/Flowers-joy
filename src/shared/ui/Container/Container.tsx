import { ReactNode } from 'react';
import cls from './Container.module.scss';

interface ContainerProps {
    children: ReactNode
}

export const Container: React.FC<ContainerProps> = (props) => {
    const {
        children
    } = props

    return (
        <div className={cls.Container}>
            {children}
        </div>
    );
}