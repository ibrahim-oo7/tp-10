import { LOGIN,INSCRIPTION } from "./ActionType";
const initialState = {
    isAuthenticated: false,
    user: null,
    users: [
        {
            firsname : 'ibrahim',
            lastname : 'elhichou',
            username : 'ibrahim_Elhichou',
            email : 'ibrahim@gmail.com',
            password : '123'
        }
    ]
} 

export const authReducer = (state = initialState,action ) => {
    switch ( action.type) {
        case LOGIN : 
            return {
                ...state,
                isAuthenticated : true,
                user : action.payload
            }
        case INSCRIPTION : 
            return {
                ...state,
                users : [...state.users,action.payload]
            }
        default : 
            return state;
    }
}
