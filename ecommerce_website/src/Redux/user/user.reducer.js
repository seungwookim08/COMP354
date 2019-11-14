const INITIAL_STATE = {
    currentUser : null,
    sellerId: null,
    firstName: null,
    lastName: null,
    imageUrl: null,
    primaryAddress: null,
    alternateAddress: null
}
//if state is ever unset, it will pass Initial state
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case'SET_CURRENT_USER':
            return {
                ...state, //everything else on state
                currentUser: action.payload.email,
                sellerId: action.payload.id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                imageUrl: action.payload.imageUrl,
                primaryAddress: action.payload.primaryAddress,
                alternateAddress: action.payload.alternateAddress

            };
        case'LOGOUT_CURRENT_USER':
            return {
                ...state,
                currentUser: null,
                sellerId: null,
                firstName: null,
                lastName: null,
                imageUrl: null,
                primaryAddress: null,
                alternateAddress: null
            }

        default:
            return state;
    }
}

export default userReducer;