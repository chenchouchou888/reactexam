import { combineReducers, createStore } from "redux";
import typesearchreducer from "./reducers/typesearchreducer";
import mainsearchreducer from "./reducers/mainsearchreducer";
const combine = combineReducers({
    typesearchreducer,
    mainsearchreducer
})
let store = createStore(combine)
export default store