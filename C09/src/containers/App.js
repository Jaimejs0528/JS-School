/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux'
import App from 'components/App';

const mapStateToProps =  (state) => {
const { isAuth } = state;
  return ({
    isAuth,
  });
}

export default (connect(mapStateToProps)(App));