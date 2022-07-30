import React, { FC, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import './index.less';
import axios from 'axios';
import '../../mock/list';
import Searchlist from '../../components/searchlist';
import { useLocation } from 'react-router-dom';
import PageList from '../../components/pageList';
const Index = () => {
    const searchkey = (useLocation().pathname as string).split('/')[2]//待改进
    const [currentPage, setCurrentPage] = useState(1)
    const [page, setPage] = useState(1)
    const [list, setlist] = useState([])
    const [all, setall] = useState(0)
    useEffect(() => {
        setCurrentPage(1)
        axios.get('/searchList', { data: { currentPage: 1, searchKey: searchkey } }).then(({ data: { data: { list, page, all } } }) => {
            setPage(page)
            setlist(list)
            setall(all)
        })
    }, [searchkey])
    return (
        <div>
            <Layout>
                <div className='main-wrappera'>
                    <div className='result'>
                        <span>共找到<span className='bl'>{all}</span>个"<span className='bl'>{searchkey}</span>"相关视频</span>
                    </div>

                    <Searchlist list={list}></Searchlist>
                    <PageList pages={page} currentPage={currentPage} changePage={(id: any) => {
                        setCurrentPage(id)
                        axios.get('/searchList', { data: { currentPage:id, searchKey: searchkey } }).then(({ data: { data: { list } } }) => {
                            setlist(list)
                        }
                        )

                    }}></PageList>

                </div>
            </Layout>
        </div>
    );
};

export default Index;
