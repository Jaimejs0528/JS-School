/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Login from 'pages/Login/components/Login';
import signIn from 'reduxAlias/modules/Login/loginActions';
import fieldHandler from 'reduxAlias/modules/Login/fieldActions';

const mapStateToProps =  (state) => {
  const { errorServer, isAuth } = state.user;
  const  { email, password } = state.user.data;
  return ({
    errorServer,
    isAuth,
    data: {
      email,
      password
    },
  });
}

const mapDispatchToProps = dispatch => (bindActionCreators({signIn, fieldHandler}, dispatch));

export default (connect(mapStateToProps, mapDispatchToProps)(Login));