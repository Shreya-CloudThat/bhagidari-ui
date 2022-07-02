import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';



function Register() {

    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')

    const addUser = () => {
        axios.post('http://localhost:3004', {
            username:username,
            password:password
        }).then(() => {
            console.log('success');
        })
    }
    return (
        <>
            {/* <Header /> */}
            {/* <div class="opacity-50"> */}
          
            <div className='container'>
                <form class="bg-transparent ">
                    <h1 class="text-center mb-4"> Sign In</h1>
                    {/* <!-- Email input --> */}
                    <div class="form-outline mb-4">

                        <input type="text" id="form2Example1" class="form-control" placeholder='User Name' name="username" value={username} onChange={(e)=>setUserName(e.target.value)}/>
                        {/* <label class="form-label" for="form2Example1">Email address</label> */}
                    </div>
                    {/* <!-- Password input --> */}
                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" placeholder='Enter Your Password' name="password" value={password} onChange = {(e)=>setPassword(e.target.value)} />
                        {/* <label class="form-label" for="form2Example2">Password</label> */}
                    </div>

                    {/* <!-- 2 column grid layout for inline styling --> */}
                    <div class="row mb-4">
                        <div class="col ">
                            {/* <!-- Checkbox --> */}
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                <label class="form-check-label" for="form2Example31"> Remember me </label>
                            </div>
                        </div>
                        <div class="col d-flex justify-content-center">
                            {/* <!-- Simple link --> */}
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>
                    {/* <!-- Submit button --> */}
                    <Link to="/Company" >
                    <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
                    </Link> 
                    {/* <!-- Register buttons --> */}
                    <div class="text-center">
                        <p>Not a member?
                            <Link to='/SignUp'>
                                Register
                            </Link>
                        </p>

                    </div>
                </form>
            </div>
         
            {/* </div>  */}
        </>
    )
}



export default Register