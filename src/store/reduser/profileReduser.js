import { SocialAPI } from "../../api/API"

const PROFILE = 'profile'

const initState = {
    profile : {}
}

const profilereduser = (state=initState, action) => {
    switch(action.type){
         case PROFILE: 
             return {
                ...state,
                profile : action.payload
             }
            default : 
                return state 
    }
}

export const getProfileAC = (data) => ({type:PROFILE, payload:data})


export const ProfileTC = (userId) => {
    return(dispatch) => {
       SocialAPI.getProfile(userId)
          .then((res) => {
            dispatch(getProfileAC(res.data))
          })
    }
}

export default profilereduser