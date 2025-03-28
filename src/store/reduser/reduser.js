import { SocialAPI } from "../../api/API"


const GET_USERS = 'get_users'
const FETCHING = 'fetching'

const initState = {
    users : [],
    fetching : false
}

const userReduser = (state=initState,action) => {
       switch(action.type){
          case GET_USERS :
            return {
                ...state,
                users : action.payload
            }
          case FETCHING : 
            return {
                ...state,
                fetching : action.payload
            }
        default :
            return state
       }
}


const getUsersAC = (users) => ({type:GET_USERS, payload:users})
const FetchingAC = (bool) => ({ type: FETCHING, payload: bool })


export const getUsersTC = () => {
    return (dispatch) => {
        dispatch(FetchingAC(true))
          SocialAPI.getUsers()
             .then ((res) => {
                 dispatch(getUsersAC(res.data.items))
                 dispatch(FetchingAC(false))

             })
        }
}


export default userReduser