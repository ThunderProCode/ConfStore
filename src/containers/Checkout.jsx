import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';
import AppContext from '../Context/AppContext';
import { FaTrashAlt } from 'react-icons/fa';
import { handleSumTotal } from '../utils';

const Checkout = () => {
    const { state: { cart }, removeFromCart } = useContext(AppContext);

    const handleRemove = product => () => {
        removeFromCart(product);
    }

    return (
        <div className="Checkout">
            <div className="Checkout-content">
                { cart.length > 0 ? <h3>Orders list: </h3> : <h3>No orders...</h3>  }
                {cart.map((item) => (
                    <div className="Checkout-item" key={item.title} >
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span>{item.price}</span>
                        </div>
                        <button type="button" onClick={handleRemove(item)} ><FaTrashAlt/></button>
                    </div>
                ))}
            </div>
            {cart.length > 0 && (    
                <div className="Checkout-sidebar">
                    <h3>{`Total Price: $ ${handleSumTotal(cart)}`}</h3>
                    <Link to="/checkout/information" >
                        <button type="button" >Proceed to payment</button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Checkout;