import { connect } from 'react-redux';

import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    loginForm: true
});

const mapDispatchToProps = (dispatch) => ({
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
