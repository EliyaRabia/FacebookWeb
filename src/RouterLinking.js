import React, { useState } from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import LoginPage from './Login/LoginPage';
export default function Main(props){
return(
    <BrowserRouter>
            <Routes>
                <Route path="/" exact component={LoginPage} />
            </Routes>
    </BrowserRouter>
    )
}