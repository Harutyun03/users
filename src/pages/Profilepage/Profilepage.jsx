import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { ProfileTC } from '../../store/reduser/profileReduser'

const Profilepage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { profile } = useSelector((store) => store.profile);
     const {userId}= useSelector((state) => state.auth)

    useEffect(() => {

        dispatch(ProfileTC(userId))
      
      }, [userId]);

      
  return (
    <div>
      <h1>{profile?.fullName}</h1>
    </div>
  )
}

export default Profilepage