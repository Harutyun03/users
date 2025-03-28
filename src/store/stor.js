import { createStore,combineReducers,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import userReduser from "./reduser/reduser";

const rootReduser = combineReducers({
    usersPage : userReduser
})

export const store = createStore(rootReduser,applyMiddleware(thunk))