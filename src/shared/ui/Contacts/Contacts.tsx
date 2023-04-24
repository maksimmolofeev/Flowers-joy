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
                <SiWhatsapp />
                <FaTelegramPlane />
                <FiPhoneCall />
                <FaInstagram />
            </IconContext.Provider>
        </div>
    );
}