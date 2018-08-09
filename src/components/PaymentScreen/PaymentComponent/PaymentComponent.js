import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import axios from 'axios/index';
import PropTypes from 'prop-types';
import history from '../../../history';
import PaymentQrCodePanel from '../PaymentQrCodePanel/PaymentQrCodePanel';
import PaymentDetailsPanel from '../PaymentDetailsPanel/PaymentDetailsPanel';
import { updateTransactionDetails } from '../../../actions/index';
import s from './PaymentComponent.css';

class PaymentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paid: false,
    };
  }

  componentDidMount() {
    this.intervalId = window.setInterval(this.getStatus, 3000);
    const newTime = new Date();
    this.startTime = newTime.getTime();
  }

  getStatus = () =>
    axios
      .get(`/api/pipay/payment-status/${this.props.currentTransactionId.id}`)
      .then(response => {
        const date = new Date();
        const status = response.data.data.status === 'paid';
        const timedOut = date.getTime() - this.startTime > 300000;
        if (status || timedOut) {
          if (timedOut) {
            history.push('/');
          }
          window.clearInterval(this.intervalId);
        }
        this.setState({ paid: status });
      })
      .catch(() => false);

  render() {
    return (
      <div className={s.componentApp}>
        <PaymentDetailsPanel
          amount={this.props.currentTransactionAmount}
          name={this.state.selectedName}
          loading={this.state.loading}
          paid={this.state.paid}
          selectedId={this.state.selectedId}
          transactionDetails={this.props.currentTransactionDetails}
        />
        <PaymentQrCodePanel
          intervalKey={this.intervalId}
          amount={this.props.currentTransactionAmount}
          name={this.state.selectedName}
          loading={this.state.loading}
          selectedId={this.state.selectedId}
          transactionDetails={this.props.currentTransactionDetails}
        />
      </div>
    );
  }
}

PaymentComponent.propTypes = {
  currentTransactionAmount: PropTypes.string.isRequired,
  currentTransactionDetails: PropTypes.object.isRequired, // eslint-disable-line
  currentTransactionId: PropTypes.object.isRequired, // eslint-disable-line
};

const mapStateToProps = state => ({
  currentTransactionId: state.currentTransactionId,
  currentTransactionCurrencies: state.currentTransactionCurrencies,
  currentTransactionAmount: state.currentTransactionAmount,
  currentTransactionDetails: state.currentTransactionDetails,
});

const mapDispatchToProps = dispatch => ({
  updateTransactionDetails: transaction =>
    dispatch(updateTransactionDetails(transaction)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(s)(PaymentComponent));
