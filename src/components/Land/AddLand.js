import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../Header/Header'

function AddLand () {
  const [company, setCompany] = useState('')
  const [village, setVillage] = useState('')
  const [survey, setSurvey] = useState('')

  //   const [password, setPassword] = useState('')

  const addLand = () => {
    axios
      .post('http://localhost:3004', {
        company: company,
        village: village,
        survey: survey
      })
      .then(() => {
        console.log('success')
      })
  }

  return (
    <div>
      <Header />
      <div className='container'>
        <form class='bg-transparent ' onSubmit={addLand}>
          <h1 class='text-center mb-4'> Add Land</h1>
          {/* <!-- Email input --> */}
          <div class='form-outline mb-4'>
            <input
              type='text'
              id='form2Example1'
              class='form-control'
              placeholder='Enter The Village Name'
              name='village'
              value={village}
              onChange={e => setVillage(e.target.value)}
            />
          </div>

          <div class='form-outline mb-4'>
            
              {/* <select
                className='form-select form-select-lg mb-3'
                name='cat'
                value={cat}
                onChange={e => {
                  setCompany(e.target.value)
                }}
              >
                <option>Select Your Main Category</option>
                {category.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.v_title}
                  </option>
                ))}
              </select>
            } */}

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

          <div class='form-outline mb-4'>
            <input
              type='text'
              id='form2Example1'
              class='form-control'
              placeholder='Enter The Survey Number'
              name='survey'
              value={survey}
              onChange={e => setSurvey(e.target.value)}
            />
          </div>

          {/* <!-- 2 column grid layout for inline styling --> */}
          {/* <!-- Submit button --> */}
          <Link to='/land'>
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

export default AddLand
