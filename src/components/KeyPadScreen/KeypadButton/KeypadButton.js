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
  name: PropTypes.string.isRequired,
  green: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default withStyles(s)(KeypadButton);
