import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ProceedButton from '../ProceedButton/ProceedButton';
import SelectedDisplay from '../SelectedDisplay/SelectedDisplay';
import s from './SelectedCurrencyPanel.css';

class SelectedCurrencyPanel extends React.Component {
  handleClick = (buttonName, currencyId) => {
    this.props.clickHandler(buttonName, currencyId);
  };

  render() {
    return (
      <div className={s['selected-component-button-panel']}>
        <div>
          <SelectedDisplay
            name={this.props.name}
            selectedId={this.props.selectedId}
            amount={this.props.amount}
          />
        </div>
        <div>
          <ProceedButton
            name="PAY NOW"
            selectedName={this.props.name}
            selectedId={this.props.selectedId}
            loading={this.props.loading}
            clickHandler={this.handleClick}
          />
        </div>
      </div>
    );
  }
}
SelectedCurrencyPanel.propTypes = {
  clickHandler: PropTypes.func,
};

export default withStyles(s)(SelectedCurrencyPanel);
