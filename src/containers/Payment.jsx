import React, { useContext } from 'react';
import { PaypalButton } from 'react-paypal-button';
import AppContext from '../Context/AppContext';
import { handleSumTotal } from '../utils';
import { useNavigate } from 'react-router-dom';

import '../styles/components/Payment.css';

const Payment = () => {
    const { state:{cart, buyer} , addNewOrder } = useContext(AppContext);
    const navigate = useNavigate();
    const clientIdPaypal = String(process.env.CLIENT_ID_PP);

    const paypalOptions = {
        clientId : clientIdPaypal,
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
                        <div className="Payment-item" key={item.tile} >
                            <div className="Payment-element">
                                <h4>{item.tile}</h4>
                                <span>
                                    $
                                    {' '}
                                    {item.price}
                                </span>
                            </div> 
                        </div>
                    ))
                }

                <button className="Payment-button">
                    <PaypalButton 
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal(cart)}
                        onPaymentStart={ () => console.log('Start Payment') }
                        onPaymentSuccess={data => handlePaymentSucces(data)}
                        onPaymentError={ error  => console.log(error) }
                        onPaymentCancel={ data => console.log(data) }
                    />
                </button>
            </div>
            <div/>
        </div>
    );
};

export default Payment;