import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import { Suspense, useEffect, useState } from 'react';
import { CatalogPage } from 'pages/CatalogPage';
import { MainPage } from 'pages/MainPage';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Menu } from 'widgets/Menu'
import classNames from 'classnames';

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