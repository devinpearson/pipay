import React from 'react';

class PaymentSummary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstStep: "summary dropped here step here"
        };
    }
    render() {
        return <div>Hey from fourth</div>;
    }
}

export default PaymentSummary;