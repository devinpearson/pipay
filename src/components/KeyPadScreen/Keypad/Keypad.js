import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import _ from 'lodash';
import axios from 'axios';
import PropTypes from 'prop-types';
import Boom from 'boom';
import KeypadDisplay from '../KeypadDisplay/KeypadDisplay';
import KeypadButtonPanel from '../KeypadButtonPanel/KeypadButtonPanel';
import history from '../../../history';
import calculate from './calculate';
import s from './Keypad.css';

class Keypad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      loading: false,
    };
  }

  getCurrencies = paymentId => {
    axios
      .get(`/api/pipay/payment-currencies/${paymentId}`)
      .then(response => {
        const chunkArray = _.chunk(response.data.data, 2);
        this.props.updateTransactionCurrencies(chunkArray);
        this.setState({ loading: false });
        history.push('/currencies');
      })
      .catch(error => {
        this.setState({ loading: false });
        return new Promise(resolve => {
          resolve(Boom.boomify(error));
        });
      });
  };

  createPaymentRequest = () => {
    this.setState({ loading: true });
    const amount = parseFloat(
      this.state.next.toString() || this.state.total.toString() || '0',
    )
      .toFixed(2)
      .toString();
    axios
      .post(`/api/pipay/payment-request`, {
        amount,
        email: 'kylepillay@gmail.com',
      })
      .then(response => {
        this.props.updateTransactionId(response.data.data.id);
        this.props.updateTransactionAmount(amount);
        this.getCurrencies(response.data.data.id);
      })
      .catch(error => {
        this.setState({ loading: false });
        return new Promise(resolve => {
          resolve(Boom.boomify(error));
        });
      });
  };

  handleClick = buttonName => {
    switch (buttonName) {
      case 'PROCEED':
        if (parseFloat(this.state.next) >= 10) {
          this.createPaymentRequest();
        } else {
          this.setState(calculate(this.state, 'AC'));
        }
        break;
      default:
        this.setState(calculate(this.state, buttonName));
    }
  };

  render() {
    return (
      <div className={s.componentApp}>
        <KeypadDisplay value={this.state.next || this.state.total || '0'} />
        <KeypadButtonPanel
          loading={this.state.loading}
          clickHandler={this.handleClick}
        />
      </div>
    );
  }
}

Keypad.propTypes = {
  updateTransactionId: PropTypes.func,
  updateTransactionCurrencies: PropTypes.func,
  updateTransactionAmount: PropTypes.func,
};

export default withStyles(s)(Keypad);
