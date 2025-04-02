import React from 'react'
import Login from '../../pages/Login/Login'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Homepage = () => {
  const {userId} = useSelector((state) => state.auth)

  if(userId){
    return <Navigate to={`/profilpage/${userId}`}/>
  }
  
  return (
    <div>
        <Login/>
    </div>
  )
}

export default Homepage