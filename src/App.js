import React from 'react';
import "./styles/styles.scss";
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';

export const App = () => {
    return <>
        <Routes>
            <Route path="/*" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </>
}
