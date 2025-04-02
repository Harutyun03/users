import React from 'react'
import { SocialAPI } from '../../api/API'

const Edit = () => {

    const handlerPhoto = (e) => {
       const file = e.target.files[0]

       SocialAPI.photoput(file)
    }

  return (
    <div>
        <input type='file' onChange={handlerPhoto}/>
        <button>Edit</button>
    </div>
  )
}

export default Edit