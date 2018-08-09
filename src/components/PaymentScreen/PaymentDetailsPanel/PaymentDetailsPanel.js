import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PaymentDetailsContainer from '../PaymentDetailsContainer/PaymentDetailsContainer';
import s from './PaymentDetailsPanel.css';

class PaymentDetailsPanel extends React.Component {
  handleClick = (buttonName, currencyId) => {
    this.props.clickHandler(buttonName, currencyId);
  };

  render() {
    return (
      <div className={s['selected-component-button-panel']}>
        <div>
          <PaymentDetailsContainer
            address={this.props.name}
            paid={this.props.paid}
            status={this.props.selectedId}
            amount={this.props.amount}
            transactionDetails={this.props.transactionDetails}
          />
        </div>
      </div>
    );
  }
}
/* eslint-disable */
PaymentDetailsPanel.propTypes = {
  clickHandler: PropTypes.func,
  transactionDetails: PropTypes.object,
  amount: PropTypes.string,
  selectedId: PropTypes.string,
  name: PropTypes.string,
  paid: PropTypes.bool,
};
/* eslint-enable */
export default withStyles(s)(PaymentDetailsPanel);
