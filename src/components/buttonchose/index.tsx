import React, { useRef, useState } from 'react';
import {show,hidden} from '../../store/actions/centerchosenaction'
import { useDispatch } from 'react-redux';
import './index.less';
import { connect } from 'react-redux'

const index = (props:any) => {
    const searchbox = useRef();
    const dispatch = useDispatch()
    const {centerchosenreducer}= props;
    document.querySelector('body')?.addEventListener(
        'click',
        (e: Event) => {
            dispatch(hidden())
        },
        true,//确保捕获层处理，可以被后续覆盖
    );
    return (
        <div ref={searchbox as any}>
            <div
                className='down-wrapper'
                onClick={() => {
                    dispatch(show())
                }}
            >
                <div className='context'>创作者中心</div>
                <div className='down'>
                    <div className='downList' style={{ display: centerchosenreducer?'flex':'none'}}>
                        <div>写文章</div>
                        <div>发沸点</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect((state:any)=>{
    return{centerchosenreducer:state.centerchosenreducer}})(index);
