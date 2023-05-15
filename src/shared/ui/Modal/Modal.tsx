import { ReactNode, useCallback, useRef, useState } from 'react';
import cls from './Modal.module.scss';
import classNames from 'classnames';

interface ModalProps {
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void
}

export const Modal: React.FC<ModalProps> = (props) => {
    const {
        children,
        isOpen,
        onClose
    } = props
    const ANIMATION_DELAY = 300
    const [isClosing, setIsClose] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        setIsClose(true)
        if(onClose) {
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClose(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const handlerContent = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const style = classNames(
        `${cls.Modal}`,
        {[`${cls.opened}`] : isOpen},
        {[`${cls.isClosing}`] : isClosing}
    )
    
    return (
        <div className={style}>
            <div className={cls.overlay} onClick={closeHandler}>
                <div className={cls.content} onClick={(e) => handlerContent(e)}>
                    {children}
                </div>
            </div>
        </div>
    );
}