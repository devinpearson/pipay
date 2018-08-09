import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CurrencyButton.css';

class CurrencyButton extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name, this.props.id);
  };

  render() {
    return (
      <div className={`${s['component-button']}`}>
        <button onClick={this.handleClick}>
          <i className={`cc ${this.props.id}`} title={this.props.name} />
          {this.props.name}
        </button>
      </div>
    );
  }
}
CurrencyButton.propTypes = {
  id: PropTypes.string, // eslint-disable-line
  name: PropTypes.string, // eslint-disable-line
  clickHandler: PropTypes.func, // eslint-disable-line
};

export default withStyles(s)(CurrencyButton);
