import React, { useEffect, useState } from 'react';

const index = () => {
    const [simplecount, setsimplecount]=useState(0);
    useEffect(()=>{
      console.log('render')
    },[])
  return (
    <div>
        <button className='yunsuan' onClick={() => {setsimplecount((state)=>--state)}}>-</button>
        <span className='count'>{simplecount}</span>
        <button className='yunsuan' onClick={() => {setsimplecount((state)=>++state)}}>+</button>
    </div>
  )
}

export default index