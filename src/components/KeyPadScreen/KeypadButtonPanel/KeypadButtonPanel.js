import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import KeypadButton from '../KeypadButton/KeypadButton';
import s from './KeypadButtonPanel.css';

class KeypadButtonPanel extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className={s['component-button-panel']}>
        <div>
          <KeypadButton name="7" clickHandler={this.handleClick} />
          <KeypadButton name="8" clickHandler={this.handleClick} />
          <KeypadButton name="9" clickHandler={this.handleClick} />
          <KeypadButton name="AC" clickHandler={this.handleClick} />
        </div>
        <div>
          <KeypadButton name="4" clickHandler={this.handleClick} />
          <KeypadButton name="5" clickHandler={this.handleClick} />
          <KeypadButton name="6" clickHandler={this.handleClick} />
          <KeypadButton name="." clickHandler={this.handleClick} />
        </div>
        <div>
          <KeypadButton name="1" clickHandler={this.handleClick} />
          <KeypadButton name="2" clickHandler={this.handleClick} />
          <KeypadButton name="3" clickHandler={this.handleClick} />
          <KeypadButton name="0" clickHandler={this.handleClick} />
        </div>
        <div>
          <KeypadButton
            loading={this.props.loading}
            name="PROCEED"
            clickHandler={this.handleClick}
            green
          />
        </div>
      </div>
    );
  }
}
KeypadButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
  loading: PropTypes.bool,
};

export default withStyles(s)(KeypadButtonPanel);
