import React, { FC, ReactNode } from 'react';
import Navigation from '../navigation';
import './index.less';
interface Props {
    children: ReactNode;
}
const index: FC<Props> = ({ children }) => {
    return (
        <div>
<Navigation></Navigation>
<div className='layout-wrapper'>{children}</div>
<div className='zhanwei'></div>
<div className='footer'></div>
        </div>
    )
};

export default index;
