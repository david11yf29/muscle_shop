import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H4b04Hmqp3ZeBAl0ZZxOvfZ32DDM1pM7cMKiSf3PmOEZ6v9Z20WGFIqbdRU1nWt1JMZS02YUrwZKqUOatgToaSq00C500LoVO';

    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Workout Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey} />
    )
}

export default StripeCheckoutButton;
