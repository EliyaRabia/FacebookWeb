import React, { useState } from 'react';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Login_Page from './Login_Page';
export default function Main(props){
return(
    <BrowserRouter>
            <Routes>
                {/* log in and create */}
                <Route path="/" exact component={Login_Page} />
            </Routes>
    </BrowserRouter>
    )
}