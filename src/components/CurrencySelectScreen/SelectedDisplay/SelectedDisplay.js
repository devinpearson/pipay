import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SelectedDisplay.css';

class SelectedDisplay extends React.Component {
  render() {
    return (
      <div className={s['selected-component-button']}>
        <div>
          <div className={s['selected-component-upper']}>
            $ {this.props.amount}
          </div>
          <div className={s['selected-component-lower']}>
            <div>Pay Using:</div>
            <div style={{ fontSize: 40, marginTop: 10 }}>
              {this.props.name.toUpperCase() || 'Select Item'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
SelectedDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default withStyles(s)(SelectedDisplay);
