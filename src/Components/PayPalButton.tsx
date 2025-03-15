import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton: React.FC = () => {
  const handleApprove = (actions: any) => {
    return actions.order.capture().then((details: any) => {
      alert(`Transaction completed by ${details.payer.name.given_name}`);
    });
  };

  return (
    <div>
      <PayPalButtons
        style={{
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'paypal',
        }}
         // @ts-ignore
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: 'CAPTURE', 
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD', 
                  value: '100.00',
                },
              },
            ],
          });
        }}
        onApprove={handleApprove}
      />
    </div>
  );
};

export default PayPalButton;
