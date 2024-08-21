const initialState = 0;
const incdec = (state=initialState, action) => {
    if (action.type === "increment") {
        // state = state + action.payload;
        return state + action.payload;
    }
    else if (action.type === "decrement") {
        // state = state - action.payload;
        return state - 1;
    } else {
        return state;
    }
    
}

export {incdec}