import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NewButton.css';
import history from '../../../history';

class NewButton extends React.Component {
  handleClick = () => {
    window.clearInterval(this.props.intervalKey);
    history.push('/');
  };

  render() {
    return (
      <div className={s['proceed-component-button']}>
        <button onClick={this.handleClick}>New Payment</button>
      </div>
    );
  }
}

NewButton.propTypes = {
  intervalKey: PropTypes.number,
};

NewButton.defaultProps = {
  intervalKey: 0,
};

export default withStyles(s)(NewButton);
