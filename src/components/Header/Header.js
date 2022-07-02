import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header () {
  const [url, setUrl] = useState()

  useEffect(() => {
    const path = window.location.pathname
    // console.log(path)
    setUrl(path)
  }, [])

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light bg-transparent mt-3 '>
        <a className='navbar-brand zoom ml-4' href='#'>
          PATHWAY DESIGN 
        </a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
        <div className='collapse navbar-collapse ml-4' id='navbarText'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active zoom'>
              <Link
                to='/company'
                className={`nav-link ${(url == '/company' || url == '/addcompany')&& 'nav-link-active'}`}>
                COMPANY
              </Link>
            </li>
            <li className='nav-item active zoom ml-4'>
              <Link to='/land' className={`nav-link ${(url == '/land' || url == '/addland') && 'nav-link-active'}`}>
                LAND
              </Link>
            </li>
            <li className='nav-item active zoom ml-4'>
              <Link to='/partner' className={`nav-link ${(url == '/partner' || url == '/addpartner') && 'nav-link-active'}`}>
                PARTNER
              </Link>
            </li>
              <li className='nav-item active zoom ml-4'>
              <Link to='/partner' className={`nav-link ${(url == '/partner' || url == '/addpartner') && 'nav-link-active'}`}>
                PARTNER
              </Link>
            </li>
            <li className='nav-item active zoom signout'>
              <Link to='/' className='nav-link'>
                SIGN OUT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
