import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import LoginForm from './LoginForm';
import { login } from '../api';

class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      user: this.getEmptyUser()
    };
  }

  getEmptyUser = () => ({ email: "", password: "" });

  handleLogin = () => {
    login(this.state.user).then(token => {
      localStorage.setItem('token', token);
      this.props.history.push('/deliveries');
    });
  }

  handleOnChangeLogin = (field, value) => {
    const user = Object.assign({}, this.state.user);
    user[field] = value;
    this.setState({ user });
  }

  render() {
    return (
      <div>
        <Navbar href="register" titulo="Registrarse"/>
        <Card titulo="Ingresar">
          <LoginForm user={this.state.user} onChange={this.handleOnChangeLogin} onLogin={this.handleLogin} />
        </Card>
      </div>
    );
  }
}

export default Login;
