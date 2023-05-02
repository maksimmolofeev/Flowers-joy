import { IconContext } from 'react-icons';
import cls from './Contacts.module.scss';
import { SiWhatsapp } from 'react-icons/si';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

interface ContactsProps {
}

export const Contacts: React.FC<ContactsProps> = (props) => {

    return (
        <div className={cls.Contacts}>
            <IconContext.Provider value={{className: `${cls.icons}`}}>
                <a href="https://wa.me/+79011887213" target='_blank' rel='noreferrer'>
                    <SiWhatsapp />
                </a>
                <a href="https://t.me/FLOWERSJOY1" target='_blank' rel='noreferrer'>
                    <FaTelegramPlane />
                </a>
                <a href="tel:+79011887213" target='_blank' rel='noreferrer'>
                    <FiPhoneCall />
                </a>
                <a href="https://instagram.com/flowersjoy_?igshid=YmMyMTA2M2Y=" target='_blank' rel='noreferrer'>
                    <FaInstagram />
                </a>
            </IconContext.Provider>
        </div>
    );
}