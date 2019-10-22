const INITIAL_STATE = {
    currentUser : null
}
//if state is ever unset, it will pass Initial state
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case'SET_CURRENT_USER':
            return {
                ...state, //everything else on state
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;