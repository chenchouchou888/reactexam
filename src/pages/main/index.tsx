import React, { FC, useEffect, useState } from 'react';
import Layout from '../../components/layout';
import './index.less';
import axios from 'axios';
import '../../mock/list';
import Sidemenu from '../../components/sidemenu';
import Videolist from '../../components/videolist';
import Typelist from '../../components/typelist';
const Index:FC = () => {
    return (
        <div>
            <Layout>
                <div className='main-wrapper'>
                    <Sidemenu></Sidemenu>
                    <div className='video-list'>
                        <Typelist></Typelist>
                        <Videolist></Videolist>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Index;
