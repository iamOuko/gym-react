import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div>
      <div class="container d-flex justify-content-center"> 
        <div class="row my-5">
          <div class="col-md-6 text-left text-white lcol">
            <div class="greeting"><h3>Welcome to <span class="txt">GoldFitness</span></h3></div>
            <h6 class="mt-3">let's light some fire and get the show on the road...</h6>
            <div class="footer">
              <div class="socials d-flex flex-row justify-content-between text-white">
                <div class="d-flex flex-row"><i class="fab fa-linkedin-in"></i><i class="fab fa-facebook-f"></i><i class="fab fa-twitter"></i></div>
                <span>Privacy Policy</span>
                <span>&copy; 2020 GoldFitness</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 rcol">
            <form class="sign-up">
              <h2 class="heading mb-4">Sign up</h2>
              <div class="form-group fone mt-2">
                <i class="fas fa-user"></i>
                <input type="name" class="form-control" placeholder="Name" />
              </div>
              <div class="form-group fone mt-2">
                <i class="fas fa-envelope"></i>
                <input type="email" class="form-control" placeholder="email" />
              </div>
              <div class="form-group fone mt-2">
                <i class="fas fa-lock"></i>
                <input type="password" class="form-control" placeholder="Password" />
                <div class="image"><i class="fas fa-eye"></i></div>
              </div>
              <input type="checkbox" class="form-check-input ml-0" id="exampleCheck1" /> 
              <label class="form-check-label ml-3" for="exampleCheck1"> I agree to <u>Terms</u> and <u>Privacy Policy</u></label>
            </form>

            <button type="button" class="btn btn-success mt-5">Get started now</button>
              
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Signup