import React, { useEffect, useRef, useState } from 'react';
import './index.less';
import { useLocation } from 'react-router';
import Searchbox from '../searchBox';
import Buttonchose from '../buttonchose';
import { useHistory } from 'react-router-dom';
const index = () => {
    const inputref  = useRef()
    const [isIn, setisIN] = useState(true);
    const history = useHistory();
    const search = ()=>{
        const searchkey = ((inputref.current as any).value)
        if(!searchkey){
            alert('请输入有效信息')
        }else{
            history.push({pathname:`/search/${searchkey}`})
        }
    }
    return (
        <div>
            <div className='nav-wrapper'>
                <div className='hand-icon'></div>
                <ul className='routeList'>
                    <li 
                    onClick={()=>{
                        history.push({pathname:'/'})
                    }}>应用市场</li>
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
            <div className='nav-side-wrapper'>
                <ul>
                    <li>综合</li>
                    <li>关注</li>
                    <li>后端</li>
                    <li>前端</li>
                    <li>Android</li>
                    <li>iOS</li>
                    <li>人工智能</li>
                    <li>开发工具</li>
                    <li>代码人生</li>
                    <li>阅读</li>
                </ul>
                <span>标签管理</span>
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
                    }}/>
                    <button className='orange-button' onClick={search}><span>搜索</span></button>
                </div>
            </div>

        </div>
    );
};

export default index;
