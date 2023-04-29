import cls from './Menu.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useEffect, useState } from 'react';
import { Contacts } from 'shared/ui/Contacts/Contacts';

interface MenuProps {
    active: boolean,
    setActive: (noActive: boolean) => void
}

export const Menu: React.FC<MenuProps> = (props) => {
    const {
        active,
        setActive
    } = props

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = (e: any) => {
            setWidth(e.target.innerWidth)
        }
        window.addEventListener('resize', handleResize);
    }, [width])

    return (
        <div className={active ? `${cls.Menu} ${cls.active}` : cls.Menu}>
            <div onClick={() => setActive(false)} className={cls.blur}></div>
            <div className={cls.burger}>
                <AppLink
                    onClick={() => setActive(false)}
                    to={'/'}
                >
                    Главная
                </AppLink>
                <AppLink
                    onClick={() => setActive(false)}
                    to={'/catalog'}
                >
                    Каталог
                </AppLink>

                {
                    width > 640
                    ? null
                    :
                    <div className={cls.contacts}>
                        <Contacts />
                    </div>
                }
            </div>
        </div>
    );
}