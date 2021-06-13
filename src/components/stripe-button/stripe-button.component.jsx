import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const PriceForStripe = price * 100;
  const publishableKey =
    "pk_test_51J1oeqEB8cnUGFvIbb3mto4kbNsQ8rEegu2qvqkucl0eDfnucECMUsPcO4tnKdLAoG5QjIWswtwHjHEzzlidnwa000DTqrIgrG";

  const onToken = (token) => {
    alert("Payment successful");
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/en/f3eb2117da"
      description={`Your total is $${price}`}
      amount={PriceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
