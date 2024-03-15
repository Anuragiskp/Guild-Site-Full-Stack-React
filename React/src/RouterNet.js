import { Route, Routes } from 'react-router-dom';
import React from 'react';
import App from './App';
import {Signup} from './Components/Signup';

function RouterNet(){
    return(
        <div>
            <Routes>
                <Route path='/' element={<App/>}></Route>
                <Route path='/Signup' element={<Signup/>}></Route>
            </Routes>
        </div>
    )
}

export default RouterNet;