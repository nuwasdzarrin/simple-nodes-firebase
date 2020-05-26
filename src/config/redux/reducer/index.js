const initialState = {
    popUp: false,
    isLogin: false,
    isLoading: false,
    user: {}
};
const Reducer = (state=initialState, action) => {
    switch (action.type) {
        case ('CHANGE_POPUP'): {
            return {
                ...state,
                popUp: action.value
            }
        }
        case ('CHANGE_ISLOGIN'): {
            return {
                ...state,
                isLogin: action.value
            }
        }
        case ('CHANGE_USER'): {
            return {
                ...state,
                user: action.value
            }
        }
        case ('CHANGE_LOADING'): {
            return {
                ...state,
                isLoading: action.value
            }
        }
        default: return state;
    }
};

export default Reducer;