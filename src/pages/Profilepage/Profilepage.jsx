import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { ProfileTC } from '../../store/reduser/profileReduser'
import Edit from '../../components/Edit/Edit'

const Profilepage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { profile } = useSelector((state) => state.profile);
    const { userId } = useSelector((state) => state.auth);

    let isAuth = userId === +id

    useEffect(() => {
      // const cachedProfil = JSON.parse(localStorage.getItem('profile'));

        dispatch(ProfileTC(id))
      }, [id]);

      // useEffect(() => {
      //   localStorage.setItem("profile", JSON.stringify(profile));
      // },[profile]);

      
  return (
    <div>
      <div>
        <img src={profile?.photos?.large===null ? 'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg' : profile?.photos?.large}/>
        <h2>{profile?.fullName}</h2>
        {
          isAuth && <Edit/>
        }
        
        </div>
    </div>
  )
}

export default Profilepage