import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
// import NotFound from './components/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
};

export default AppRoutes;
