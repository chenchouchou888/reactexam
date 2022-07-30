import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PageList from '../../components/pageList'
import '../../mock/list'
import { stateprop } from '../../store';
import './index.less';
const Index = (props: stateprop) => {
    const { typesearchreducer } = props
    const [page, setPage] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [list, setlist] = useState([])
    useEffect(() => {
        setCurrentPage(1)
        axios.get('/videoList', { data: { ...typesearchreducer, currentPage: 1 } }).then(({ data: { data: { list, page } } }) => {
            setPage(page)
            setlist(list)
        }
        )
    }, [typesearchreducer])


    return (

        <ul className='video'>
            {list.map((item: videoitem) => {
                return (
                    <li className='item' key={item.id}>
                        <div className='zhiding-icon' style={{ display: item.top ? 'block' : 'none' }}></div>
                        <img src={item.img} alt="视频" />
                        <div className='time'>
                            <span>{item.time}</span></div>
                        <div className='introduce'>
                            <div className='title'>{item.title}</div>
                            <div className='intro-text'>{item.info}</div>
                            <div className='info'>
                                <div className='left'>
                                    <div className='icon'></div>
                                    <div className='times'>{item.times}次播放</div>
                                </div>
                                <div className='count'>{item.count}节</div>
                            </div>
                        </div>
                    </li>)
            })}
            <PageList pages={page} currentPage={currentPage} changePage={(id: number) => {
                setCurrentPage(id)
                axios.get('/videoList', { data: { ...typesearchreducer, currentPage: id } }).then(({ data: { data: { list, page } } }) => {
                    setPage(page)
                    setlist(list)
                }
                )

            }}></PageList>
        </ul>

    );
};
const mapTostate = (state: stateprop) => ({ typesearchreducer: state.typesearchreducer })
export default connect(mapTostate)(Index);
export interface videoitem {
    img: string,
    id: string,
    time: string,
    top: boolean,
    title: string,
    info: string,
    times: number,
    count: number

}
