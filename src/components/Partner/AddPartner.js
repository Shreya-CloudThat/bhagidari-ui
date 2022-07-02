import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Header/Header'

function AddPartner () {
  const [name, setName] = useState('')
  const [phoneno, setPhoneno] = useState('')
  const [percentage, setPercentage] = useState('')


  const addPartner = () => {
  axios.post('http://localhost:3004', {
      name:name,
      phoneno: phoneno,
      percentage:percentage
    })
    .then(() => {
      console.log('success')
    })
}

  return (
    <div>
      <Header />
      <div className='container'>
        <form class='bg-transparent ' onSubmit={addPartner}>
          <h1 class='text-center mb-4'> Add Partner</h1>
          {/* <!-- Email input --> */}
          <div class='form-outline mb-4'>
            <input
              type='text'
              id='form2Example1'
              class='form-control'
              placeholder='Enter The Name'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div class='form-outline mb-4'>
            <input
              type='text'
              id='form2Example1'
              class='form-control'
              placeholder='Enter The Phone Number'
              name='phoneno'
              value={phoneno}
              onChange={e => setPhoneno(e.target.value)}
            />
          </div>

          <div class='form-outline mb-4'>
            <input
              type='text'
              id='form2Example1'
              class='form-control'
              placeholder='Enter The Percentage'
              name='percentage'
              value={percentage}
              onChange={e => setPercentage(e.target.value)}
            />
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          {/* <!-- Submit button --> */}
          <Link to='/partner'>
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

export default AddPartner
