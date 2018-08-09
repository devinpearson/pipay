import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Footer from '../Footer';
import rootReducer from '../../reducers/index';

const store = createStore(rootReducer);

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <Provider store={store}>
        <div>
          {this.props.children}
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
