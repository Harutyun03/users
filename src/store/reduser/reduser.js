import { SocialAPI } from "../../api/API"


const GET_USERS = 'get_users'
const FETCHING = 'fetching'
const CHANGE_PAGE = 'change_page'

const initState = {
    users : [],
    totalcount : 300,
    totalpagecount : 30,
    page : 1,
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
          case CHANGE_PAGE :
            return {
                ...state,
                page : action.payload
            }
        default :
            return state
       }
}


const getUsersAC = (users) => ({type:GET_USERS, payload:users})
const FetchingAC = (bool) => ({ type: FETCHING, payload: bool })
export const CangePageAC = (number) => ({type:CHANGE_PAGE, payload:number})


export const getUsersTC = (page) => {
    return (dispatch) => {
        dispatch(FetchingAC(true))
          SocialAPI.getUsers(page)
             .then ((res) => {
                 dispatch(getUsersAC(res.data.items))
                 dispatch(FetchingAC(false))

             })
        }
}


export default userReduser