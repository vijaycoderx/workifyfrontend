const initialState = {}
const userData = (state = initialState, action) => {
    if (action.type === "userInfo") {
        return {...state, ...action.payload}
    }
    else {
        return state;
    }
}

export {userData}