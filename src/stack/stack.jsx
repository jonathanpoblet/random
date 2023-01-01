import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../screens/Home/Home';
import Layout from '../screens/Layout/Layout';
import Number from '../screens/Number/Number';
import Team from '../screens/Team/Team';

const Stack = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route
                        path='/'
                        element={ <Home /> }
                    />
                    <Route
                        path='/randomnumber'
                        element={ <Number /> }
                    />
                    <Route
                        path='/randomteam'
                        element={ <Team /> }
                    />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default Stack;
