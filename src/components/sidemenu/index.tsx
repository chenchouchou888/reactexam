import axios from 'axios';
import React, { FC, useEffect, useState} from 'react';
import './index.less';
import '../../mock/list';
import { useDispatch } from 'react-redux';
import { MainTypeSearch } from '../../store/actions/mainsearchaction';
import { typeSearch } from '../../store/actions/typesearchaction';
interface item{
    id:string,
    info:string,
    chosen?:boolean
}
const Index: FC= () => {
    const [list,setList] = useState<Array<item>>([])
    const dispatch = useDispatch()
    useEffect(()=>{
        axios.get('/sidelist').then(({data:{res:{array}}}) => {
            array[0].chosen = true 
            setList(array)
        })
    },[])
    return (
        <ul className='side'>
            {list.map((item:item)=>{
                return (<li key={item.id} onClick={()=>{
                    setList(list.map((normalitem)=>{
                        if(item===normalitem){
                            normalitem.chosen = true
                        }else{
                            normalitem.chosen = false
                        }
                        return normalitem
                    }))
                    dispatch(MainTypeSearch(item.id))
                    dispatch(typeSearch({mainType:item.id,smallType:['01']}))
                    
                }} className={item.chosen?'chosen':''}>{item.info}</li>)
            })}
        </ul>


    );
};
export default Index;