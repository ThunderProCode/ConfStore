import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/components/Information.css';
import AppContext from '../Context/AppContext';

const Information = () => {

    const { state:{ cart }, addToBuyer }= useContext(AppContext);
    const form = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = Object.fromEntries(formData);
        addToBuyer(buyer);
        navigate('/checkout/payment');
    }

    return (
       <div className="Information">
           <div className="Information-content">
               <div className="Information-head">
                   <h2>Contact Info:</h2>
               </div>
               <div className="Information-form">
                   <form ref={form}>
                       <input type="text" placeholder="Full Name" name="name" />
                       <input type="text" placeholder="Email" name="email" />
                       <input type="text" placeholder="Address" name="address" />
                       <input type="text" placeholder="Apt#" name="apt" />
                       <input type="text" placeholder="City" name="city" />
                       <input type="text" placeholder="Country" name="country" />
                       <input type="text" placeholder="State" name="state" />
                       <input type="text" placeholder="Zip Code" name="zip" />
                       <input type="text" placeholder="Phone" name="phone" />
                   </form>
               </div>
               <div className="Information-buttons">
                   <div className="Information-back">
                        <Link to="/checkout" >Back</Link>
                   </div>
                   <div className="Information-next">
                       <button type="button" onClick={handleSubmit} >Pay</button>
                   </div>
               </div>
           </div>
           <div className="Information-sidebar">
               <h3>Order:</h3>
               { cart.map((item) => (
                <div className="Information-item" key={item.title} >
                    <div className="Information-element">
                        <h4>{item.title}</h4>
                        <span>${item.price}</span>
                    </div>
                </div>
               ))}
           </div>
       </div>
    );
};

export default Information;