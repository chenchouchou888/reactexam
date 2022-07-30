import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import store from '../../store'
import { deletetodo } from '../../store/actions/todolistaction';
import './index.less'
interface todoitemProps{
  todoId:string,
  todoInfo:string
}
const index = (props:todoitemProps) => {
  const {todoId,todoInfo} = props;
  const dispatch = useDispatch()
  const history = useHistory()
  return (

   <div className='wrapper'>
    <span onClick={
      ()=>{
        history.push({pathname: '/detail', query:{
          todoId,
          todoInfo
        }}as any)
      }
    }>{todoInfo}</span>
    <button  className='delete' onClick={()=>{
      dispatch(deletetodo(todoId))
    }}>delete</button>
   </div>
  )
}

export default index