import React, { Component } from 'react';
import Login from '../components/Login/Login';

class LoginCntr extends Component {
   constructor () {
      super();
      this.state = {
         username: '',
         password: ''
      }
   }

   handleChange = (property, value) => {
      this.setState({ [property]: value });
   }

   render () {
      return (
         <Login username={this.state.username}
                password={this.state.password}
                handleChange={this.handleChange} />
      )
   }
}

export default LoginCntr;