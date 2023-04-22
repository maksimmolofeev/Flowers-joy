import Logo from 'shared/assets/icons/Logo.svg'
import { SiWhatsapp } from 'react-icons/si';
import { FaTelegramPlane } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import { MdFavoriteBorder } from 'react-icons/md';
import { BsBasket } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import cls from './Navbar.module.scss';
import { IconContext } from 'react-icons';

export const Navbar = () => {
    return (
        <header className={cls.Navbar}>
            <div className={cls.content}>
                <div className={cls.contacts}>
                    <IconContext.Provider value={{className: `${cls.icons}`}}>
                        <SiWhatsapp />
                        <FaTelegramPlane />
                        <FiPhoneCall />
                        <FaInstagram />
                    </IconContext.Provider>
                </div>
                <Logo className={cls.logo} />
                <div className={cls.features}>
                    <IconContext.Provider value={{className: `${cls.icons}`}}>
                        <GoSearch />
                        <MdFavoriteBorder />
                        <BsBasket />
                        <FiMenu />
                    </IconContext.Provider>
                </div>
            </div>
        </header>
    );
}
