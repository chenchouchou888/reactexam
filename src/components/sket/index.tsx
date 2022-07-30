import React from 'react'
import { connect } from 'react-redux';
import './index.less'
interface sketProps{
    show:boolean
}
const index = (props:sketProps) => {
  const {show} = props;
  return (
    <div className='sket-wrapper' style={{display:show?'block':'none'}}>
        <div className='short-line'></div>
        <div className='short-line'></div>
        <div className='short-line'></div>
        <div className='long-line'></div>
        <div className='long-line'></div>
        <div className='long-line'></div>
        <div className='long-line'></div>
        <div className='long-line'></div>
        <div className='long-line'></div>
        <div className='long-line'></div>
    </div>
  )
}

export default connect()(index)