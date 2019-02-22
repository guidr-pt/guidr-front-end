import { VERIFY_USER } from '../actions';

const isEmpty = obj => {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
}

let user = localStorage.getItem('user');

const initialState = user ? { isAuth: true, user } : {};

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case VERIFY_USER:
            return {
                ...state,
                isAuth: !isEmpty(action.payload),
                user: action.payload
            }
        default:
            return {
                ...state
            }
    }
}