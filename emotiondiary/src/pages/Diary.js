import React from 'react';
import { useParams } from 'react-router-dom';

const Diary = () => {

    const { id } = useParams();

    return (
        <div>
            <h2>DIARY</h2>
            <p>이 곳은 일기 리스트 페이지입니다.</p>
        </div>
    );
};

export default Diary;