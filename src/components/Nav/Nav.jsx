import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav'>
        <h1>Users</h1>
        <div className='btn-group'>
            <button className='btn-1'>Sing In</button>
            <button className='btn-2'>Sing Up</button>

        </div>
    </div>
  )
}

export default Nav