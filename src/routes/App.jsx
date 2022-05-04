import React from 'react';
import Layout from '../components/Layout';
import useInitialState from '../Hooks/useInitialState';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import { Home,Checkout,Information,NotFound,Payment,Success } from '../containers';

const App = () => {

    const initialState = useInitialState();

    return (       
        <AppContext.Provider value={initialState} >
            <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="/checkout" element={ <Checkout/> } />
                    <Route path="/checkout/information" element={ <Information/> } />
                    <Route path="/checkout/payment" element={ <Payment/> } />
                    <Route path="/checkout/success" element={ <Success/> } />
                    <Route element={ <NotFound/> } />
                </Routes>
            </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;