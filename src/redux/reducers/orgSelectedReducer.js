const initialState = {};

const orgSelect = (state = initialState, action) => {
    if (action.type === "orgSelect") {
        return {...action.payload};
    } else {
        return state;
    }
    
}

export {orgSelect}