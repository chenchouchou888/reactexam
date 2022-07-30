import {MAINTYPESEARCH} from '../constants/index'
const INITIAL_STATE:string = '01'
interface action{
    type:string,
    data:string
}
export default function mainTypeSearch (state = INITIAL_STATE, action:action) {
  switch (action.type) {
    case MAINTYPESEARCH:
      return action.data
    default:
      return state
  }
}