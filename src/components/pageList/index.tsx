import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './index.less';
const Index = (props:any) => {
    const {pages,currentPage,changePage} = props;
    const [array,setArray] = useState([]);
    useEffect(()=>{
        const arr = new Array(pages).fill({})
        for (const key in arr) {
           arr[key] = parseInt(key)+1
        }
        setArray(arr as any)
    },[pages])
   const stepPage = (direction:string,can:boolean,step:number)=>{
    if(can){
        if(direction=='left'){
            changePage(currentPage-step)
        }
        if(direction=='right'){
            changePage(currentPage+step)
        }
    }
   }
    
    return (

       <ul className='pageList'>
        <div className={'left-t'+' '+((currentPage-2<1)?'ban':'')} onClick={()=>{stepPage('left',currentPage-2<1?false:true,2)}}></div>
        <div className={'left'+' '+((currentPage-1<1)?'ban':'')} onClick={()=>{stepPage('left',currentPage-1<1?false:true,1)}}></div>
        {array.map((item)=><li key={item} onClick={()=>{changePage(item)}} className={item==currentPage?'chosen':''}>{item}</li>)}
        <div className={'right'+' '+((currentPage+1>pages)?'ban':'')} onClick={()=>{stepPage('right',currentPage+1>pages?false:true,1)}}></div>
        <div className={'right-t'+' '+((currentPage+2>pages)?'ban':'')} onClick={()=>{stepPage('right',currentPage+2>pages?false:true,2)}}></div>
       </ul>

    );
};

export default Index