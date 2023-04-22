import { CatalogPage } from "pages/CatalogPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={<MainPage />}/>
                <Route path='/catalog' element={<CatalogPage />}/>
            </Routes>
        </Suspense>
    );
}

export default AppRouter