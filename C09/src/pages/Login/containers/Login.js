import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import signIn from '../../../actions/loginActions';
import fieldHandler from '../../../actions/fieldActions';
import Login from '../Login';

const mapStateToProps =  (state) => {
  const { errorServer, errorInputs, isAuth } = state;
  const  { email, password } = state.data;
  return ({
    errorServer,
    isAuth,
    data: {
      email,
      password
    },
    errorInputs,
  });
}

const mapDispatchToProps = dispatch => (bindActionCreators({signIn, fieldHandler},dispatch));

export default (connect(mapStateToProps, mapDispatchToProps)(Login));