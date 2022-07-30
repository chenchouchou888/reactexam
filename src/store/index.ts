import { combineReducers, createStore } from "redux";
import todolistreducer from './reducers/todolistreducer'
import centerchosenreducer from './reducers/centerchosen'
import typesearchreducer from "./reducers/typesearchreducer";
import mainsearchreducer from "./reducers/mainsearchreducer";
const combine = combineReducers({
    todolistreducer,
    centerchosenreducer,
    typesearchreducer,
    mainsearchreducer
})
let store = createStore(combine)
export default store