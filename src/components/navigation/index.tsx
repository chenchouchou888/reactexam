import React, { useEffect, useRef, useState } from 'react';
import './index.less';
import { useLocation } from 'react-router';
import Searchbox from '../searchBox';
import { useHistory } from 'react-router-dom';
const index = () => {
    const inputref  = useRef()
    const [isIn, setisIN] = useState(true);
    const [inputc,setinputc] = useState('')//这块逻辑还有优化空间 现在仅实现功能，感觉做复杂了
    const history = useHistory();
    const search = ()=>{
        const searchkey = ((inputref.current as unknown as HTMLInputElement).value)
        if(!searchkey){
            alert('请输入有效信息')
        }else{
            history.push({pathname:`/search/${searchkey}`})
        }
    }
    return (
        <div>
            <div className='nav-wrapper'>
                <div className='hand-icon'  onClick={()=>{
                        history.push({pathname:'/'})
                    }}></div>
                <ul className='routeList'>
                    <li >应用市场</li>
                    <li className={`include-bottom ${isIn ? 'is-in' : 'is-out'}`}>开发者<span className='spin'></span></li>
                    <li className={`include-bottom ${isIn ? 'is-in' : 'is-out'}`}>社区与合作伙伴<span className='spin'></span></li>
                    <li className={`include-bottom ${isIn ? 'is-in' : 'is-out'}`}>支持与服务<span className='spin'></span></li>
                    <li className={`include-bottom ${isIn ? 'is-in' : 'is-out'}`}>运营与管理<span className='spin'></span></li>
                
                    <Searchbox></Searchbox>
                    <div className='zhezhaolist' >
                        <div className='ding-icon'></div>
                        <div className='kongzhi'>控制台</div>
                        <div className='head-icon'></div>
                        <div  className={`include-bottom ${isIn ? 'is-in' : 'is-out'}`}>chen.chun <span className='spin'></span></div>
                    </div>
                </ul>
            </div>
         
            <div className='video-center-header'>
                <div className='title'>
                    视频中心
                </div>
                <div className='title-intro'>
                    帮您快速了解汉得产品，助力交付使用全流程
                </div>
                <div className='search-box-orange'>
                    <input type="text" placeholder='请搜索类别/视频名称'
                    ref = {inputref as any}
                    onKeyUp={(e)=>{
                        e.code=='Enter'&&search()
                        setinputc((inputref.current as unknown as HTMLInputElement).value)
                    }}
                    />
                    <div className='close-icon' style={{display:inputc?'block':'none'}}
                    onClick={()=>{
                        (inputref.current as unknown as HTMLInputElement).value=''
                        setinputc('')
                    }}></div>
                    <button className='orange-button' onClick={search}><span>搜索</span></button>
                </div>
            </div>

        </div>
    );
};

export default index;
