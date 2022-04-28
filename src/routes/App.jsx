import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from '../containers/Checkout';
import Home from '../containers/Home';
import Information from '../containers/Information';
import NotFound from '../containers/NotFound';
import Payment from '../containers/Payment';
import Layout from '../components/Layout';

const App = () => {
    return (       
        <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/checkout" element={ <Checkout/> } />
                <Route path="/checkout/information" element={ <Information/> } />
                <Route path="/checkout/payment" element={ <Payment/> } />
                <Route path="/checkout/success" element={ <Checkout/> } />
                <Route element={ <NotFound/> } />
            </Routes>
        </Layout>
        </BrowserRouter>
    );
};

export default App;