import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PaymentDetailsContainer.css';

class PaymentDetailsContainer extends React.Component {
  render() {
    return (
      <div className={s['selected-component-button']}>
        <div>
          <div className={s['selected-component-upper']}>
            <span>{this.props.transactionDetails.currency}:</span>{' '}
            {this.props.transactionDetails.extra.amount}
            <div>
              Payment Address
              <div>
                <div className={s['payment-address']}>
                  {this.props.transactionDetails.extra.address}
                </div>
              </div>
            </div>
          </div>
          <div className={s['selected-component-lower']}>
            Payment Status
            <div
              style={
                this.props.paid
                  ? { borderColor: 'green' }
                  : { borderColor: 'red' }
              }
            >
              {this.props.paid ? 'Paid' : 'Waiting'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
PaymentDetailsContainer.propTypes = {
  paid: PropTypes.bool.isRequired,
  transactionDetails: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(s)(PaymentDetailsContainer);
