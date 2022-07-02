import React from 'react'
import Header from '../Header/Header'
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function UpdateCompany () {
  const [company, setCompany] = useState('')
  //   const [password, setPassword] = useState('')

  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:3004/${id}`)
      .then(response => {
        // console.log("response",response)
        setCompany(response.data[0].company)
      })
      .then(result => {
        console.log('result')
      })
    // getData(response.data);
  }, [{ id }])

  const handleSubmit = async e => {
    e.preventDefault()
    var data = {
      company: company
    }
    await fetch(`http://localhost:3004/${id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log('res', result)
        alert('Updated Succesfully')
        //  if (result['status'] === 'ok') {

        window.location.href = '/company'
        //  }
      })
  }

  return (
    <div>
      <Header />
      <div className='container' onSubmit={handleSubmit}>
        <form class='bg-transparent '>
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
              Update
            </button>
          </Link>
          {/* <!-- Register buttons --> */}
        </form>
      </div>
    </div>
  )
}

export default UpdateCompany
