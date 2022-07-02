import React from 'react'
import Header from '../Header/Header'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function ListLand () {
  const [data, getData] = useState([])

  const URL = 'http://localhost:4001/land'

  const fetchData = () => {
    axios.get(URL).then(response => {
      console.log(response)
      getData(response.data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const getDelete = id => {
    if (window.confirm('Are you sure that you wanted to delete?')) {
      axios.delete(`http://localhost:3000/${id}`)
      setTimeout(() => fetchData(), 10)
    }
  }

  return (
    <div className='image'>
      <Header />
      <div className='LandList'>
        <Link to='/addland' className='btn mt-2 mb-2'>
          <i class='fa fa-plus zoom'></i>
        </Link>
        <table className='table table-hover'>
          <tr className='info'>
            <th>VILLAGE</th>
            <th>COMPANY</th>
            <th>SURVEY NO</th>
            <th></th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={val.id}>
                <td>{val.village}</td>
                <td>{val.company}</td>
                <td>{val.survey_no}</td>
                <Link to={`/updatecompany/${val.id}`} className='btn mt-2 mb-2'>
                  <i className='fa fa-edit'></i>
                </Link>
                <button
                  className='btn ml-3 mt-2 mb-2'
                  onClick={() => getDelete(val.id)}
                >
                  <i className='fa fa-trash'></i>
                </button>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default ListLand
