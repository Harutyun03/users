import { createStore,combineReducers,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import userReduser from "./reduser/reduser";
import authreduser from "./reduser/authReduser";
import profilereduser from "./reduser/profileReduser";

const rootReduser = combineReducers({
    usersPage : userReduser,
    auth : authreduser,
    profile : profilereduser
})

export const store = createStore(rootReduser,applyMiddleware(thunk))