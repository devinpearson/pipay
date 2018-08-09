import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import axios from 'axios/index';
import Boom from 'boom';
import CurrencyButtonPanel from '../CurrencyButtonPanel/CurrencyButtonPanel';
import SelectedCurrencyPanel from '../SelectedCurrencyPanel/SelectedCurrencyPanel';
import { updateTransactionDetails } from '../../../actions/index';
import s from './CurrencySelect.css';
import history from '../../../history';

class CurrencySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedName: '',
      selectedId: '',
      loading: false,
    };
  }

  getAddress = coinId => {
    this.setState({ loading: true });
    axios
      .get(
        `/api/pipay/payment-address/${
          this.props.currentTransactionId.id
        }/${coinId}`,
      )
      .then(response => {
        this.props.updateTransactionDetails(response.data.data);
        this.setState({ loading: false });
        history.push('/payment');
      })
      .catch(error => {
        this.setState({ loading: false });
        return new Promise(resolve => {
          resolve(Boom.boomify(error));
        });
      });
  };

  handleClick = (name, id) => {
    switch (name) {
      case 'PAY NOW':
        this.getAddress(id);
        break;
      default:
        this.setState({ selectedName: name, selectedId: id });
    }
  };

  render() {
    return (
      <div className={s.componentApp}>
        <CurrencyButtonPanel
          currentTransactionCurrencies={this.props.currentTransactionCurrencies}
          clickHandler={this.handleClick}
        />
        <SelectedCurrencyPanel
          amount={this.props.currentTransactionAmount}
          name={this.state.selectedName}
          loading={this.state.loading}
          clickHandler={this.handleClick}
          selectedId={this.state.selectedId}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentTransactionId: state.currentTransactionId,
  currentTransactionCurrencies: state.currentTransactionCurrencies,
  currentTransactionAmount: state.currentTransactionAmount,
});

const mapDispatchToProps = dispatch => ({
  updateTransactionDetails: transaction =>
    dispatch(updateTransactionDetails(transaction)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(s)(CurrencySelect));
