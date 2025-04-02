import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Users from '../../components/Users/Users'
import { CangePageAC } from '../../store/reduser/reduser'
import './Userpage.css'

const Userpage = () => {
    const {users,fetching,totalcount,totalpagecount} = useSelector((state) => state.usersPage)
    const dispatch = useDispatch()

    const pagecount = Math.ceil(totalcount/totalpagecount)
    let pageArr = []

    for (let i = 1; i<=pagecount; i++){
      pageArr.push(i)
    }

    const ChangePage = (page) => {
         dispatch(CangePageAC(page))
    }
    
    
  return (
    <div className='userpage'>
        <div className='user'>
        
        {
          fetching ? <h1>Loading...</h1>:
          users.map((user) => {
           return <Users key={user.id} user={user}/>
          })
        }
        </div>
        <div className='buttons'>
        {
          pageArr.map((p)=>{
            return <button className='b' onClick={() => ChangePage(p)} key={p}>{p}</button>
          })
        }
        </div>
   </div>
  )
}

export default Userpage