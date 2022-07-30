import {TYPESEARCH} from '../constants/index'
export interface searchKey{
    mainType:string,
    smallType:Array<string>
}
interface action{
    type:string,
    data:searchKey
}
const INITIAL_STATE:searchKey = {
    mainType:'01',
    smallType:['01']
}
export default function handleTodoList (state = INITIAL_STATE, action:action) {
  switch (action.type) {
    case TYPESEARCH:
      return action.data
    default:
      return state
  }
}