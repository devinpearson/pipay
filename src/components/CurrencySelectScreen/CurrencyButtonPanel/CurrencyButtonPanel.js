import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import CurrencyButton from '../CurrencyButton/CurrencyButton';
import s from './CurrencyButtonPanel.css';

class CurrencyButtonPanel extends React.Component {
  render() {
    const listItems = this.props.currentTransactionCurrencies.map(item => (
      <div key={Math.random().toString()}>
        {item.map(innerItem => (
          <CurrencyButton
            key={Math.random().toString()}
            name={innerItem.name}
            id={innerItem.id}
            clickHandler={this.props.clickHandler}
          />
        ))}
        {item.length < 2 ? (
          <CurrencyButton name="" id="" clickHandler={() => {}} />
        ) : null}
      </div>
    ));
    return <div className={s['component-button-panel']}>{listItems}</div>;
  }
}
CurrencyButtonPanel.propTypes = {
  clickHandler: PropTypes.func, // eslint-disable-line
  currentTransactionCurrencies: PropTypes.array, // eslint-disable-line
};

export default withStyles(s)(CurrencyButtonPanel);
