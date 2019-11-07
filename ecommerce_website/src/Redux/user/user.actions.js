export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});

export const logoutCurrentUser = () => ({
    type: 'LOGOUT_CURRENT_USER'
});