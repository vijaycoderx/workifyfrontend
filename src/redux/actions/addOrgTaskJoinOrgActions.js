
const addOrgWin = (data) => {
    return {
        type: "addOrg",
        payload: data
    }
}

const addTaskWin = (data) => {
    return {
        type: "addTask",
        payload: data
    }
}

const joinOrgWin = (data) => {
    return {
        type: "joinOrg",
        payload: data
    }
}

const resetState = () => {
    return {
        type: "resetState"
    }
}



// const increment = (data) => ({
//     type: "increment",
//     payload: data
// })

// const decrement = (data) => ({
//     type: "decrement",
//     payload: data
// })
const increment = (data) => {
    return { type: "increment", payload: data }
};
const decrement = (data) => {
    return { type: "decrement", payload: data };
} 


export {addOrgWin, addTaskWin, joinOrgWin, resetState, increment, decrement}