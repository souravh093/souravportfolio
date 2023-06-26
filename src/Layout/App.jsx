import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

const App = () => {
    return (
        <div className='bg-[#050F25]'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;