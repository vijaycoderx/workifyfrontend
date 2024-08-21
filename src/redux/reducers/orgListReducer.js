const initialState = [];

const orgList = (state = initialState, action) => {
    if (action.type === "orgList") {
        return [...action.payload];
    } else {
        return state;
    }
}

export {orgList}