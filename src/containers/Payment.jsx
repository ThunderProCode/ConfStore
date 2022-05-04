import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import { handleSumTotal } from '../utils';
import { useNavigate } from 'react-router-dom';
import config from '../../config/index';
import { PayPalButton } from 'react-paypal-button-v2';

import '../styles/components/Payment.css';

const Payment = () => {
    const { state } = useContext(AppContext);
    const { cart, buyer } = state;
    const navigate = useNavigate();

    const paypalOptions = {
        clientId : config.clientIdPaypal,
        intent: 'capture',
        currency: 'USD',
    }

    const buttonStyles = {
        layout: 'vertical',
        shaped: 'rect'
    }

    const handlePaymentSucces = (data) => {
        console.log(data);
        if( data.status === 'COMPLETED' ) {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder);
            navigate('/checkout/success');
        }
    }

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Order summary:</h3>

                {
                    cart.map( (item) => (
                        <div className="Payment-item" key={item.title} >
                            <div className="Payment-element">
                                <h4>{item.title}</h4>
                                <span>
                                    $
                                    {' '}
                                    {item.price}
                                </span>
                            </div> 
                        </div>
                    ))
                }

                <div className="Payment-button">
                    <PayPalButton 
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal(cart)}
                        onPaymentStart={ () => console.log('Start Payment') }
                        onPaymentSuccess={data => handlePaymentSucces(data)}
                        onPaymentError={ error  => console.log(error) }
                        onPaymentCancel={ data => console.log(data) }
                    />
                </div>
            </div>
            <div/>
        </div>
    );
};

export default Payment;