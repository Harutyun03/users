import { useDispatch,useSelector } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import { getUsersTC } from './store/reduser/reduser'
import { Route, Routes } from 'react-router-dom'
import Userpage from './pages/Userpage/Userpage'
import Layout from './components/Layout/Layout'
import Login from './pages/Login/Login'
import Profilepage from './pages/Profilepage/Profilepage'


function App() {
  const dispatch = useDispatch()
  const {page} = useSelector((state) => state.usersPage)
  

  useEffect(() => {
     dispatch(getUsersTC(page))
  },[page])
  
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Userpage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profilpage/:id' element={<Profilepage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
