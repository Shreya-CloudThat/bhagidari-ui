import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

function ListCompany () {
  const [data, getData] = useState([])

  const URL = 'http://localhost:4001/company'

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
      <div className='List'>
        <Link to='/addcompany' className='btn mt-2 mb-2'>
          <i class='fa fa-plus zoom'></i>
        </Link>
        <table className='table table-hover'>
          <tr className='info'>
            <th>COMPANY</th>
            <th></th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={val.id}>
                <td>{val.v_title}</td>
                <td>{val.e_status}</td>
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

export default ListCompany
