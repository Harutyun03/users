import { useDispatch,useSelector } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import { getUsersTC } from './store/reduser/reduser'
import { Route, Routes } from 'react-router-dom'
import Userpage from './pages/Userpage/Userpage'
import Layout from './components/Layout/Layout'


function App() {
  const dispatch = useDispatch()
  const {users} = useSelector((state) => state.usersPage)
  

  useEffect(() => {
     dispatch(getUsersTC())
  },[])
  
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Userpage/>}/>


        </Route>
      </Routes>
    </div>
  )
}

export default App
