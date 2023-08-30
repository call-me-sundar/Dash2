import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Components from './Devops.js/Components';
import SideNavbar from './Devops.js/SideNavbar';
import Table from './Devops.js/Table';

function Routing() {
    return (
        // <BrowserRouter>

        <Routes>


            <Route path="/" element={<Table />} />
            <Route path="/home" element={<Components />} />
        </Routes>

    //  </BrowserRouter>
    );
}

export default Routing;
