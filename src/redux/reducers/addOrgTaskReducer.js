const initialState = {}

const addOrgTask = (state = initialState, action) => {
    if (action.type === "addTask") {
        return {...state, add_org_task_join_org: "addTask" }
    }
    else if (action.type === "addOrg") {
        return {...state, add_org_task_join_org: "addOrg" }
    }
    else if(action.type === "joinOrg"){
        return {...state, add_org_task_join_org: "joinOrg"}
    }
    else if (action.type === "resetState") {
        console.log("heeeeeee")
        return {...state, add_org_task_join_org: ""}
    }
    else {
        return state;
    }
}   

export {addOrgTask}