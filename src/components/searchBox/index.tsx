import React, { useEffect, useState } from 'react';
import './index.less';
const index = () => {
    const [isFirst,setisFirst] = useState(true)
    const [isShow,setIsShow] = useState(true)
    useEffect(()=>{
        document.addEventListener('click',()=>{
            setIsShow(false)
        },true)//捕获阶段设置，确保被输入框CLICK覆盖
    },[])
    return (
            <label className='searchBox'>
                <div className='split'></div>
                <div className={`inout  ${isFirst?'':isShow?'in':'out'}`}
                onClick={()=>{
                    setIsShow(true)
                    setisFirst(false)//防止初刷动画
                }}>
                <div className='search-icon'></div>
                <input type="text" placeholder='全站检索...' />
                </div>
            </label>

    );
};

export default index;
