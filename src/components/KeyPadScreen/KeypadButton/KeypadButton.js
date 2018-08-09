import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Loader from 'react-loader-spinner';
import s from './KeypadButton.css';

class KeypadButton extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    return (
      <div
        className={
          this.props.green ? s['green-component-button'] : s['component-button']
        }
      >
        <button onClick={this.handleClick}>
          {this.props.loading ? (
            <Loader type="Bars" color="#ffb600" height="28" width="28" />
          ) : (
            this.props.name
          )}
        </button>
      </div>
    );
  }
}
KeypadButton.propTypes = {
  name: PropTypes.string,
  green: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
  loading: PropTypes.bool,
};

export default withStyles(s)(KeypadButton);
