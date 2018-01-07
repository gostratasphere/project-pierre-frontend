import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  componentWillMount () {
    this.setState({
      username: '',
      password: '',
      message: '',
      messageClass: ''
    });
  }

  submitLogin (event) {
    let that = this;
    let element = event.target;
    element.disabled = true;
    if (this.state.username && this.state.password) {
      // add logic to login service
      console.log(this.state.username);
      console.log(this.state.password);
      this.setState({username: '', password: '', message: 'success', messageClass: 'success'});
      // console.log(this.getState('password'))
    } else {
      console.log('username or password are blank');
      this.setState({message: 'please fill out all fields', messageClass: 'failure'});
    }
    window.setTimeout(function(event) {
      that.setState({message: ''});
      element.disabled = false;
    }, 2000)
  }

  handleChange (event) {
    if (event.target) {
      if (event.target.name === 'username') {
        this.setState({username: event.target.value});
      }
      if (event.target.name === 'password') {
        this.setState({password: event.target.value});
      }
    }
  }

  componentDidUpdate () {
    // console.log(this.state);
  }

  render () {
    return (
      <div className='login-form'>
        <h2>Login</h2>
        <label>Username: </label>
        <input name='username' onChange={this.handleChange} value={this.state.username} />
        <label>Password: </label>
        <input name='password' type='password' onChange={this.handleChange} value={this.state.password} />
        <button name='submit' onClick={this.submitLogin}>login</button>
        <div id='notify-message' className={this.state.messageClass}>
          {this.state.message}
        </div>
      </div>
    )
  }
}

export default Login;