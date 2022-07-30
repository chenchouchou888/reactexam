import {HIDDEN,SHOW} from '../constants/index';
export const show = () =>{
    return {
        type:SHOW
    }
}
export const hidden  = ()=>{
    return{
        type:HIDDEN
    }
}