import {ADD,DELETE} from '../constants/index'
export interface todo{
    todoInfo:string
    todoId:string
}
const INITIAL_STATE:Array<todo> = []//空数组

export default function handleTodoList (state = INITIAL_STATE, action:any) {
  switch (action.type) {
    case ADD:
      return [...state,action.data]
    case DELETE:
        return state.filter((item:todo)=>item.todoId!=action.data)
    default:
      return state
  }
}