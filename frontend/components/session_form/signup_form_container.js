import SignupForm from './signup_form';
import { signup, clearAllErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';

const msp = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Sign up with your email address',
    currentUser: state.entities.users[state.session.id]
  };
};
const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearAllErrors: () => dispatch(clearAllErrors())
  };
};

export default connect(msp,mdp)(SignupForm);
