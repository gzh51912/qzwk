let initState = {
    isLogin: false,
    userinfo: {}
}

const reducer = function (state = initState, { type, payload }) {
    switch (type) {
        case 'SET_LOGIN_DATA':
            return {
                ...state,
                isLogin: payload.isLogin,
                userinfo: payload.userinfo
            }
        case 'SET_USERINFO':
            return {
                ...state,
                userinfo: payload.userinfo
            }
        case 'LOGOUT':
            return {
                isLogin: false,
                userinfo: {}
            }

        default:
            return state
    }
}

export default reducer;