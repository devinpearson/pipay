import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import s from './KeypadDisplay.css';

class Display extends React.Component {
  render() {
    return (
      <div className={s['component-display']}>
        <div>{this.props.value}</div>
      </div>
    );
  }
}
Display.propTypes = {
  value: PropTypes.string,
};

export default withStyles(s)(Display);
