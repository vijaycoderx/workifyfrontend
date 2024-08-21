const assignTask = (data) => {
    return {
        type: "assignTask",
        payload: data,
    }
}

export {assignTask}