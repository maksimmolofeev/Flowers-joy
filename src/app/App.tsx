import './styles/index.scss'
import { useEffect, useState } from 'react';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Menu } from 'widgets/Menu'
import { CompaniesModal } from 'features/OrderFromCompanies';

const App = () => {
    const [menuActive, setMenuActive] = useState(false)

    const toggleMenu = () => {
        setMenuActive(menuActive => !menuActive)
    }

    useEffect(() => {
        document.body.classList.toggle('no_scroll', menuActive)
    }, [menuActive])

    return (
        <div className={'app'}>
            <Navbar active={menuActive} setActive={toggleMenu} />
            <AppRouter />
            <Menu active={menuActive} setActive={setMenuActive} />
        </div>
    );
}

export default App