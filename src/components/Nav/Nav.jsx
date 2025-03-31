import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <h1>Users</h1>
        <div className='btn-group'>
          <NavLink to='/login'>
            <button className='btn-1'>Sing In</button>
          </NavLink>
            {/* <button className='btn-2'>Sing Up</button> */}
        </div>
    </div>
  )
}

export default Nav