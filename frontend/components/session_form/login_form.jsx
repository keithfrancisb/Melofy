import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {email: '', password: ''};
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
    const otherType = 'SIGN UP';

    return (
      <div className='wrapper'>
        <div className='session'>
          <header>
            <h3>{formType}</h3>
            {this.renderErrors()}
          </header>

          <button className='demo-button' onClick={this.props.demoLogin}>LOG IN AS DEMO USER</button>

          <br/>
            <div className='divider-or-parent'>
              <div className='divider-or'/> <span className='or'>OR</span> <div className='divider-or'/>
            </div>
          <br/>

          <form className='session-form' onSubmit={this.handleSubmit}>
            <input className='session-input' type='text' placeholder='Email Address' value={this.state.email} onChange={this.update('email')} required/>
              <br/>
            <input className='session-input' type='password' placeholder='Password' value={this.state.password} onChange={this.update('password')} required/>
              <br/>
            <input className='session-button' type='submit' value='LOG IN' className='session-button'/>
          </form>
          <br/>
            <div className='divider'/>
          <br/>
          <span>Don't have an account?</span>

            <Link className='signup-in-login-button' to='/signup'>{otherType}</Link>

        </div>
      </div>
    );
  }
}

export default LoginForm;
