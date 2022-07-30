import React from 'react'
import './index.less'
const index = (props:any) => {
    const {list} = props;
  return (
    <div className='top'>
        {
            list.map((item:any)=>{return(
                <div className='searchlist-wrapper' key={item.id}>
                    <div className='left'>
                    <img src={item.img} alt="photo" />
                    <div className='time'>{item.time}</div>
                    <div className='bottom'>
                                <div className='icon'></div>
                                <div className='times'>{item.times}次播放</div>
                            </div>
                    </div>
                    <div className='right'>
                        <div className='title'>{item.title}</div>
                        <div className='label-wrapper'>
                            {item.label.map((item:any)=>{
                                return <li className='label'>{item}</li>
                            })}
                        </div>
                        <div className='detail'>
                           <span>{item.detail}</span></div>
                    </div>
                </div>
            )})
        }
    </div>
  )
}

export default index
