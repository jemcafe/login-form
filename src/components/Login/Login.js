import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
   const { username, password, handleChange } = props;

   const logoSquare = {
      transform: `translate(${username.length*2}px, 0)`
   }

   return (
      <div className="login">
         <form onSubmit={(e) => e.preventDefault()}>
            <div className="logo">
               <div className="eyes" style={logoSquare}>
                  <div className="eye"></div>
                  <div className="eye"></div>
               </div>
            </div>
            <h2>Sign In</h2>
            <input className="username-input" value={username} onChange={(e) => handleChange('username', e.target.value)} placeholder="Username"/>
            <input className="password-input" value={password} onChange={(e) => handleChange('password', e.target.value)} placeholder="Password" type="password"/>
            <div>
               <input className="btn" type="submit" value="Sign In"/>
            </div>
         </form>
      </div>
   );
}

Login.propTypes = {
   username: PropTypes.string.isRequired,
   password: PropTypes.string.isRequired,
   handleChange: PropTypes.func.isRequired
}

export default Login;