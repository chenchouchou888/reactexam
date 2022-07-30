import React, { SetStateAction, useEffect, useState } from 'react'
import './index.less'
import '../../mock/list'
import axios from 'axios'
import { connect, useDispatch } from 'react-redux'
import { typeSearch } from '../../store/actions/typesearchaction'
import store from '../../store'
const index = (props:any) => {
  const [typeList,setTypeList] = useState([])
  const dispatch = useDispatch()
  const {mainsearchreducer} = props;
  useEffect(()=>{
    axios.get('/smallList',{data:mainsearchreducer}).then(res => {
      const array = res.data.res
      if(array.length > 0 ){
        array[0].smallarr[0].chosen = true
        setTypeList(array[0].smallarr)
      }else{
        setTypeList([])
      }
  })

  },[mainsearchreducer])
  return (
    
    <ul className='type-list'>
    <label >视频分类</label>
    {
    typeList.map((item:{id:string,info:string,chosen?:boolean})=>{
      return (<li 
        key={item.id}
        className={item.chosen?'chosen':''}
        onClick={()=>{
        let newList = typeList.map((i:any)=>{
          if(i==item){
            i.chosen = i.chosen?false:true
          }
          return  i 
        })
        if(newList.filter((i)=>i.chosen).length==0){
          newList[0].chosen = true;
        }
        dispatch(typeSearch({...store.getState().typesearchreducer,smallType:newList.filter((item)=>item.chosen).map((item)=>item.id)}))
        setTypeList(newList as any)
      }}
      >{item.info}</li>)})
    }
</ul>
  )
}

const mapTostate = (state:any)=>({mainsearchreducer:state.mainsearchreducer})
export default connect(mapTostate)(index)