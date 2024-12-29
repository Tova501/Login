
import { Dispatch, createContext } from "react"
import { UserType } from "../models/userType"

type Action = {
    type: 'LOGIN',
    data: UserType
} | {
    type: 'UPDATE_USER',
    data: Omit<UserType, 'email'>
} | {
    type: 'LOGOUT'
}

const default_user = {email:'',password:'',fullName:'',address:'', phone:''}

export const UserContext = createContext<{
    user: UserType,
    userDispatch: Dispatch<Action>
}>({user: default_user, userDispatch: ()=>null});

export default (state: UserType, action: Action):UserType =>{
    switch (action.type) {
        case 'LOGIN':
            return {...state,...action.data}
        case 'UPDATE_USER':
            return {...state, 
                    password:action.data.password?action.data.password:state.password,
                    fullName:action.data.fullName?action.data.fullName:state.fullName,
                    address:action.data.address?action.data.address:state.address,
                    phone:action.data.phone?action.data.phone:state.phone}
        case 'LOGOUT':
            return default_user
        default:
            return state;
    }
}
