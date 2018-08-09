import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Loader from 'react-loader-spinner';
import s from './ProceedButton.css';

class ProceedButton extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name, this.props.selectedId);
  };

  render() {
    return (
      <div className={s['proceed-component-button']}>
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
ProceedButton.propTypes = {
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  selectedId: PropTypes.string.isRequired,
};

export default withStyles(s)(ProceedButton);
