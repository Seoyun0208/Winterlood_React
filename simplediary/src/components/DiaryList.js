import React, { useContext } from 'react';
import { DiaryStateContext } from '../App';
import DiaryItem from './DiaryItem';

const DiaryList = () => {

    const diaryList = useContext(DiaryStateContext);

    return (
        <div className='DiaryList'>
            <div className="wrapper">
                <h1>일기 리스트</h1>
                <h4>{diaryList.length}개의 일기가 있습니다.</h4>
                {diaryList.map((diary) =>
                    <DiaryItem key={diary.id} {...diary} />
                )}
            </div>
        </div>
    );
};

DiaryList.defaultProps = {
    diaryList: []
}

export default DiaryList;