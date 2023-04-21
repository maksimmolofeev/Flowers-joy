import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import MainPage from './pages/MainPage/MainPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { CatalogPageAsync } from './pages/CatalogPage/CatalogPage.async';
import { Suspense } from 'react';

const App = () => {
    return (
        <div className='app'>
            <Link to={'/'}>Главная</Link>
            <Link to={'/catalog'}>Каталог</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageAsync />}/>
                    <Route path='/catalog' element={<CatalogPageAsync />}/>
                </Routes>
            </Suspense>
            
        </div>
    );
}

export default App