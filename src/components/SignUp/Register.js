import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function Register() {
  return (
    <>
      {/* <Header /> */}
      {/* <div class="opacity-50"> */}
      <div className='container'>
        <form class="bg-transparent mt-5">
          <h1 class="text-center mb-4"> Sign Up</h1>
          <div class="form-outline mb-4">

            <input type="TEXT" id="form2Example1" class="form-control" placeholder='Enter Your name' name="name"/>
            {/* <label class="form-label" for="form2Example1">Email address</label> */}
          </div>
          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">

            <input type="email" id="form2Example1" class="form-control" placeholder='Email Address' name="email"/>
            {/* <label class="form-label" for="form2Example1">Email address</label> */}
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" placeholder='Enter Your Password' name="password"/>
            {/* <label class="form-label" for="form2Example2">Password</label> */}
          </div>
          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" placeholder='Confirm Password' name="cpassword" />
            {/* <label class="form-label" for="form2Example2">Password</label> */}
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          {/* <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                <label class="form-check-label" for="form2Example31"> Remember me </label>
              </div>
            </div>
          </div>
            */}
          {/* <!-- Submit button --> */}
          <button type="button" class="btn btn-primary btn-block mb-4">Sign Up</button>

          {/* <!-- Register buttons --> */}
          <div class="text-center">
            <p>Already a member? <Link to='/'>Sign In</Link></p>

          </div>
        </form>
      </div>
      {/* </div>  */}
    </>
  )
}



export default Register