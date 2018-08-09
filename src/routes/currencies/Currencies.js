import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Currencies.css';
import CurrencySelect from '../../components/CurrencySelectScreen/CurrencySelect/CurrencySelect';

class Currencies extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <CurrencySelect />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Currencies);
