import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import s from './Amount.css';
import {
  updateTransactionId,
  updateTransactionCurrencies,
  updateTransactionAmount,
} from '../../actions/index';
import Keypad from '../../components/KeyPadScreen/Keypad/Keypad';

class Amount extends React.Component {
  updateTransactionId(id) {
    this.props.updateTransactionId({ id });
  }

  updateTransactionCurrencies(currencies) {
    this.props.updateTransactionCurrencies({ currencies });
  }

  updateTransactionAmount(amount) {
    this.props.updateTransactionAmount({ amount });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Keypad
            updateTransactionCurrencies={this.updateTransactionCurrencies.bind(this)} // eslint-disable-line
            updateTransactionId={this.updateTransactionId.bind(this)} // eslint-disable-line
            updateTransactionAmount={this.updateTransactionAmount.bind(this)} // eslint-disable-line
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({
  updateTransactionId: transactionId =>
    dispatch(updateTransactionId(transactionId)),
  updateTransactionCurrencies: currencies =>
    dispatch(updateTransactionCurrencies(currencies)),
  updateTransactionAmount: amount => dispatch(updateTransactionAmount(amount)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(s)(Amount));
