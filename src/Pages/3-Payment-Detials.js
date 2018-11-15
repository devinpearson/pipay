import React from 'react';

class PaymentDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstStep: "paymment details step here"
        };
    }
    render() {
        return <div>Hey from First</div>;
    }
}

export default PaymentDetails;