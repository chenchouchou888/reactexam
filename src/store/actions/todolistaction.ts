import {ADD,DELETE} from '../constants/index';
import { todo } from '../reducers/todolistreducer';
export const addtodo = ({todoInfo,todoId}:todo) =>{
    return {
        type:ADD,
        data:{
            todoId,
            todoInfo
        }
    }
}
export const deletetodo  = (todoId:string)=>{
    return{
        type:DELETE,
        data:todoId
    }
}