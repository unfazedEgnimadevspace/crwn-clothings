import React from 'react';
import "./check-out-page.styles.scss";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import StripeCheckOutButton from '../../components/stripe/stripe.component';
import CheckOutItem from '../../components/checkout-item/checkoutItem.component';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckOutItem cartItem={cartItem} key={cartItem.id}/>
      ))}
      <div className='total'>TOTAL: ${total}</div>
      <div className='test-warning'>
        * Please use the following test credit card for Payment
        <br/>
        4242 4242 4242 4242 - Exp-01/20 cvv: 123
      </div>
      <div>
        <StripeCheckOutButton price={total} />
      </div>
         
    </div>
  );
  
  const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
  });
  
  export default connect(mapStateToProps)(CheckoutPage);