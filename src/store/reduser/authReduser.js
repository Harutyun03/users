import { SocialAPI } from "../../api/API"

const LOGIN = 'login'

const initState = {
    userId : null
}

const authreduser = (state=initState, action) => {
    switch(action.type){
         case LOGIN: 
             return {
                ...state,
                userId : action.payload
             }
            default : 
                return state 
    }
}

export const LoginAC = (data) => ({type:LOGIN, payload:data})


export const LoginTC = (email,password) => {
    return(dispatch) => {
       SocialAPI.login(email,password)
          .then((res) => {
            dispatch(LoginAC(res.data.data.userId))
          })
    }
}

export default authreduser