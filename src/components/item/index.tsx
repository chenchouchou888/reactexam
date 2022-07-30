import React from 'react'
import './index.less'
interface itemProps{
    'author':string,
    'paragraph':string,
    'time':string,
    'title':string
}
const index = (props:itemProps) => {
    const {title,time,paragraph,author} = props;
  return (
    <div className='item-wrapper'>
        <div className='item-header'>
            <span className='author'>{author}</span>
            <span className='time'>{time}</span>
        </div>
        <div className='title' onClick={()=>{
            console.log('click')
        }}>
            {title}
        </div>
    
        <div className='paragraph'>
            {paragraph}
        </div>
        <div className='split'></div>
    </div>
  )
}

export default index