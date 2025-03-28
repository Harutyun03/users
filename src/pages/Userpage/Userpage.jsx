import React from 'react'
import { useSelector } from 'react-redux'
import Users from '../../components/Users/Users'
import './Userpage.css'

const Userpage = () => {
    const {users,fetching} = useSelector((state) => state.usersPage)
    
    
  return (
    <div className='userpage'>
        <div className='user'>
        
        {
          fetching ? <h1>loading...</h1>:
          users.map((user) => {
           return <Users key={user.id} user={user}/>
           
          })
        
        
        }
       </div>

    </div>
  )
}

export default Userpage