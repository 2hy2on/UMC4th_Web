import {combineReducers} from "redux";
import todos from "./todos";

const rootReducer = combineReducers({
    todos,
})
export default rootReducer;

//reducer들 하나로 합치기
