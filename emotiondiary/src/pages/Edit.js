import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Edit = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    console.log(id);

    const navigate = useNavigate();

    return (
        <div>
            <h2>EDIT</h2>
            <p>이 곳은 일기 수정 페이지입니다.</p>
            <button onClick={() => setSearchParams({ who: 'seoyun' })}>Query String 바꾸기</button>
            <button onClick={() => navigate('/')}>HOME 으로 가기</button>
            <button onClick={() => navigate(-1)}>뒤로 가기</button>
        </div>
    );
};

export default Edit;