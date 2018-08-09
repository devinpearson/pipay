import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import NewButton from '../NewButton/NewButton';
import QrCodeDisplay from '../QrCodeDisplay/QrCodeDisplay';
import s from './PaymentQrCodePanel.css';

class PaymentQrCodePanel extends React.Component {
  render() {
    return (
      <div className={s['selected-component-button-panel']}>
        <div>
          <QrCodeDisplay transactionDetails={this.props.transactionDetails} />
        </div>
        <div>
          <NewButton intervalKey={this.props.intervalKey} />
        </div>
      </div>
    );
  }
}
PaymentQrCodePanel.propTypes = {
  transactionDetails: PropTypes.object.isRequired, //eslint-disable-line
  intervalKey: PropTypes.number,
};

PaymentQrCodePanel.defaultProps = {
  intervalKey: 0,
};

export default withStyles(s)(PaymentQrCodePanel);
