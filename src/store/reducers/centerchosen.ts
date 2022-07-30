import {SHOW,HIDDEN} from '../constants/index'
const INITIAL_STATE:boolean= false

export default function handleCenterChosen (state = INITIAL_STATE, action:any) {
  switch (action.type) {
    case SHOW:
      return true
    case HIDDEN:
        return false
    default:
      return state
  }
}