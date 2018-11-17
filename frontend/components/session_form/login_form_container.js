import LoginForm from './login_form';
import { login, clearAllErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'LOG IN',
    currentUser: state.entities.users[state.session.id]
  };
};
const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearAllErrors: () => dispatch(clearAllErrors()),
    demoLogin: () => dispatch(login({email:'demo_user@notMail.com', password:'123456'}))
  };
};

export default connect(msp,mdp)(LoginForm);
