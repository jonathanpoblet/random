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
                        path='/random/'
                        element={ <Home /> }
                    />
                    <Route
                        path='/random/randomnumber'
                        element={ <Number /> }
                    />
                    <Route
                        path='/random/randomteam'
                        element={ <Team /> }
                    />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default Stack;
