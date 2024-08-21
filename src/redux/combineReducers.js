import { combineReducers } from "redux";
import { addOrgTask } from "./reducers/addOrgTaskReducer";
import { incdec } from "./reducers/incdec";
import { userData } from "./reducers/userDataReducer";
import { orgList } from "./reducers/orgListReducer";
import { orgSelect } from "./reducers/orgSelectedReducer";
import { assignTask } from "./reducers/assignTaskReducer";

const rootReducer = combineReducers({
    addOrgTaskReducer: addOrgTask,
    incdecReducer: incdec,
    userDataReducer: userData,
    orgListReducer: orgList,
    orgSelectReducer: orgSelect,
    assignTaskReducer: assignTask,
})

export { rootReducer };