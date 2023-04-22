import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import { Suspense } from 'react';
import { CatalogPage } from 'pages/CatalogPage';
import { MainPage } from 'pages/MainPage';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <div className='page-wrapper'>
                {/* <Link to={'/'}>Главная</Link>
                <Link to={'/catalog'}>Каталог</Link> */}
                <AppRouter />
            </div>
            
        </div>
    );
}

export default App