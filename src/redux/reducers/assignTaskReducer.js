const initialState = {};

const assignTask = (state = initialState, action) => {
    if (action.type === "assignTask") {
        return {...state, ...action.payload}
    } else {
        return state;
    }
}

export {assignTask}