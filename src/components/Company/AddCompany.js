import React from 'react'
import Header from '../Header/Header'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function AddCompany () {
  const [company, setCompany] = useState('')
//   const [password, setPassword] = useState('')

  const addCompany = () => {
    axios
      .post('http://localhost:3004', {
        company:company
      })
      .then(() => {
        console.log('success')
      })
  }


  return (
    <div>
      <Header />
    <div className='container'>
        <form class='bg-transparent ' onSubmit={addCompany}>
          <h1 class='text-center mb-4'> Add Company</h1>
          {/* <!-- Email input --> */}
          <div class='form-outline mb-4'>
            <input
              type='text'
              id='form2Example1'
              class='form-control'
              placeholder='Enter The Company Name'
              name='company'
              value={company}
              onChange={e => setCompany(e.target.value)}
            />
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          
          {/* <!-- Submit button --> */}
          <Link to='/company'>
            <button type='button' class='btn btn-primary btn-block mb-4'>
              Add
            </button>
          </Link>
          {/* <!-- Register buttons --> */}   
        </form>
      </div>
    </div>
  )
}

export default AddCompany
