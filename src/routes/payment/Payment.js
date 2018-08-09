import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Payment.css';
import PaymentComponent from '../../components/PaymentScreen/PaymentComponent/PaymentComponent';

class Payment extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <PaymentComponent />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Payment);
