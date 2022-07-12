import React from 'react'
import { Link} from 'react-router-dom';

function Login() {
  return (
    <div class="container">
    <div class="screen">
      <div class="screen__content">
        <form class="login">
          <h1>Log in</h1>
          <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input type="text" class="login__input" placeholder="Username / Email" />
          </div>
          <div class="login__field">
            <i class="login__icon fas fa-lock"></i>
            <input type="password" class="login__input" placeholder="Password" />
          </div>
          <Link to="/profile">
            <button class="button login__submit">
              <span class="button__text">Log In</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>	
          </Link>
          
          			
        </form>
       
        
      </div>
      <div class="screen__background">
        <span class="screen__background__shape screen__background__shape4"></span>
        <span class="screen__background__shape screen__background__shape3"></span>		
        <span class="screen__background__shape screen__background__shape2"></span>
        <span class="screen__background__shape screen__background__shape1"></span>
      </div>		
    </div>
  </div>
  )
}

export default Login