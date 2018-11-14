import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    };
    this.initState = Object.assign({}, this.state);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.clearAllErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    // const user = Object.assign({}, this.state);
    this.props.processForm(this.state);
    this.setState(this.initState);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors() {
    const { errors } = this.props;

    return (
      <ul>
        {errors.map( (error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    );
  }
  render() {

    const { formType } = this.props;
    const otherType = 'Login';
    const link = formType === 'login' ? 'signup' : 'login';
    const { first_name, last_name, email, password } = this.state;

    return (
      <div className='wrapper'>
        <div className='session'>
          <header>
            <h3>{formType}</h3>
            {this.renderErrors()}
          </header>
          <form className='session-form' onSubmit={this.handleSubmit}>
            <input className='session-input' type='text' placeholder='   First Name' value={first_name} onChange={this.update('first_name')}/>
              <br/>
            <input className='session-input' type='text' placeholder='   Last Name' value={last_name} onChange={this.update('last_name')}/>
              <br/>
            <input className='session-input' type='text' placeholder='   Email Address' value={email} onChange={this.update('email')}/>
              <br/>
            <input className='session-input' type='password' placeholder='   Password' value={password} onChange={this.update('password')}/>
              <br/>
            <input className='session-button' type='submit' value='Sign Up'/>
          </form>
          <span>Already have an account? <Link to={`/login`}>{otherType}</Link></span>
        </div>
      </div>
    );
  }
}

export default SignupForm;
