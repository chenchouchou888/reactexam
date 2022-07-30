import { nanoid } from 'nanoid';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from '../../store/actions/todolistaction';
import { todo } from '../../store/reducers/todolistreducer';
import './index.less';
const index = () => {
    const inputRef= useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()
    const addEvent = ()=>{
        if(inputRef.current)
        {
            const newtodo:todo  = {
                todoInfo:inputRef.current.value,
                todoId:nanoid()
            }
            dispatch(addtodo(newtodo))
        }
        
    }
  return (
    <div className='add-wrapper'>
        <input className='add' type="text" ref={inputRef} onKeyUp={
            (e)=>{
                if(e.key==='Enter'){
                    addEvent();
                }
            }
        } placeholder='输入后回车/点击按钮'/>
        <button className='addTodo' onClick={addEvent}>click</button>
    </div>
  )
}

export default index