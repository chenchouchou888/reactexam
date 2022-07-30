import { combineReducers, createStore } from "redux";
import typesearchreducer from "./reducers/typesearchreducer";
import mainsearchreducer from "./reducers/mainsearchreducer";
import searchKey from './reducers/typesearchreducer'
const combine = combineReducers({
    typesearchreducer,
    mainsearchreducer
})
let store = createStore(combine)
export default store
export interface stateprop{
    typesearchreducer?:{
        mainType:string,
        smallType:Array<string>
    },
    mainsearchreducer?:string
}