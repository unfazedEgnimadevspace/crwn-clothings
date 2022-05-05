import React from 'react';
import  StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51Kw15CBYK0kRFOeJojl0jbX0TT6pa33MdbS6m8pKtrLfTWpy9Ne6epZgfmJsMKYBXXiCG8VrEpaSFw1rwkyqPy2j001wmLPC4c';
    const onToken = (token) => {
        console.log(token);
        alert('Payment Sucessful')
    }
    return(
        <div>
           <StripeCheckout name='CRWN-CLOTHINGS' label='Pay Now' image='https://svgshare.com/i/CUz.svg' billingAddress shippingAddress  description={`Your total is $${price}`} amount={priceForStripe}  panelLabel='Pay Now'  token={onToken}  stripeKey={publishableKey} />
        </div>
    )
}
export default StripeCheckOutButton;