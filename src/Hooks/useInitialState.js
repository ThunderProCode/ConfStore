import React from 'react';
import initialState from '../initialState';

const useInitialState = () => {

    const [state, setState] = React.useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }

    const removeFromCart = payload => {
        setState({
            ...state, 
            cart: state.cart.filter(items => items.id != payload.id),
        });
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        });
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        }) 
    }

    return ({
        addToCart,
        addToBuyer,
        removeFromCart,
        state,
        addNewOrder
    });
};

export default useInitialState;