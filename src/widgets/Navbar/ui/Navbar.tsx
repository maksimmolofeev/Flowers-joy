import Logo from 'shared/assets/icons/Logo.svg'
import { GoSearch } from 'react-icons/go';
import { MdFavoriteBorder } from 'react-icons/md';
import { BsBasket } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import cls from './Navbar.module.scss';
import { IconContext } from 'react-icons';
import { FC, useEffect, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Contacts } from 'shared/ui/Contacts/Contacts';
import { AppLink, LinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface NavbarProps {
    active: boolean,
    setActive: () => void
}

export const Navbar: FC<NavbarProps> = (props) => {
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
        <header className={cls.Navbar}>
            <div className={cls.content}>
                {
                    width > 640 ?
                        <Contacts />
                        :
                        null
                }
                <AppLink to={RoutePath.main}>
                    <Logo className={cls.logo} />
                </AppLink>
                <div className={cls.features}>
                    <IconContext.Provider value={{className: `${cls.icons}`}}>
                        <GoSearch />
                        <AppLink to={RoutePath.liked} theme={LinkTheme.ICON}>
                            <MdFavoriteBorder />
                        </AppLink>
                        <AppLink to={RoutePath.basket} theme={LinkTheme.ICON}>
                            <BsBasket />
                        </AppLink>
                        <Button
                            theme={ButtonTheme.CLEAR}
                            onClick={setActive}
                        >
                            {active ? <AiOutlineClose /> : <FiMenu />}
                        </Button>
                    </IconContext.Provider>
                </div>
            </div>
        </header>
    );
}
