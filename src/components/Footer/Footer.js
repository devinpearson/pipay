import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.text}>Powered By</div>
          <div className={s.frame}>
            <img className={s.logo} src="/images/globee-logo.png" alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
