import React from 'react';
import {Link} from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h2>메인페이지 입니다.</h2>
            <ul>
                <Link to='/product/1'><li>1번상품</li></Link>
                <Link to='/product/2'><li>2번상품</li></Link>
                <Link to='/product/3'><li>3번상품</li></Link>
            </ul>
        </div>
    );
};

export default Main;