
const initialState = {
    user_id: 0,
    username: '',
    password: '',
    email:'',
    isAdmin: false
}

const UPDATE_USER = 'UPDATE_USER'

export default function reducer(state=initialState, action){
    const {type, payload} = action
    switch(type){
        case UPDATE_USER:
            const { user_id, username, password, email, isAdmin } = payload
            return {...state, user_id, username, password, email, isAdmin}
        default:
            return state
    }
}

export function updateUser(userObj){
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}