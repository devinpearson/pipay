import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import QRCode from 'react-qr-code';
import s from './QrCodeDisplay.css';

class QrCodeDisplay extends React.Component {
  render() {
    return (
      <div className={s['selected-component-button']}>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{ border: '5px solid white', width: 250, margin: 'auto' }}
          >
            <QRCode
              size={250}
              value={this.props.transactionDetails.extra.qr_code}
            />
          </div>
        </div>
      </div>
    );
  }
}
QrCodeDisplay.propTypes = {
  transactionDetails: PropTypes.object,
};

export default withStyles(s)(QrCodeDisplay);
