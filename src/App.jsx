import { useDispatch,useSelector } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import { getUsersTC } from './store/reduser/reduser'
import { Route, Routes } from 'react-router-dom'
import Userpage from './pages/Userpage/Userpage'
import Layout from './components/Layout/Layout'
import Profilepage from './pages/Profilepage/Profilepage'
import Homepage from './components/Homepage/Homepage'

function App() {
  const dispatch = useDispatch()
  const {page} = useSelector((state) => state.usersPage)
  

  useEffect(() => {
     dispatch(getUsersTC(page))
  },[page])
  
  return (
    <div className='app'>
      <Routes>
        
            <Route path='/' element={<Homepage/>}/>
            <Route path='/users' element={<Userpage/>}/>
            <Route path='/profilpage/:id' element={<Profilepage/>}/>
        
      </Routes>
    </div>
  )
}

export default App
