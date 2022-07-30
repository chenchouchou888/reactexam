import { render } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { todo } from '../../store/reducers/todolistreducer'
import Todoitem from '../todoitem'
import axios from 'axios'
import '../../mock/list'
interface props{
  todolistreducer:Array<todo>
}
const index = (props:props) => {
  const array = props.todolistreducer
  useEffect(()=>{
    axios.get('/user').then(res => {
      console.log(res.data)
  })

  },[])
  return (
    <div>
      {array.map((item:todo)=>{
        return <Todoitem key={item.todoId} todoId={item.todoId} todoInfo={item.todoInfo}/>
      })}
    </div>
  )
}
const mapTostate = (state:props)=>({todolistreducer:state.todolistreducer})
export default connect(mapTostate)(index);