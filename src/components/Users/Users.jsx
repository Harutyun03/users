import React from 'react'
import './Users.css'
import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Users = ({user}) => {
    console.log(user);
     const {id} = useParams()
    
  return (
    <div className='users'>
        <h2>{user?.name}</h2>
        <NavLink to={`profilpage/${id}`}>
            <img src={user?.photos.large===null ? 'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg' : user?.photos.large}/>
        </NavLink>

    </div>
  )
}

export default Users