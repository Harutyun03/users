import React from 'react'
import './Users.css'

const Users = ({user}) => {
    console.log(user);
    
  return (
    <div className='users'>
        <h2>{user?.name}</h2>
        <img src={user?.photos.large===null ? 'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg' : user?.photos.large}/>
    </div>
  )
}

export default Users