import React, { useEffect, useState } from 'react';

const DiaryEditor = () => {

    const [state, setState] = useState({
        author: '',
        content: '',
        emotion: '1'
    });

    const handleChangeState = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        console.log('저장성공');
    }

    useEffect(() => {
        console.log(state);
    }, [state]);

    return (
        <div className='DiaryEditor'>
            <div className="wrapper">
                <h1>오늘의 일기</h1>
                <div>
                    <input name='author' value={state.author} onChange={handleChangeState} />
                </div>
                <div>
                    <textarea name='content' value={state.content} onChange={handleChangeState} />
                </div>
                <div>
                    <span>오늘의 감정점수: </span>
                    <select name='emotion' value={state.emotion} onChange={handleChangeState}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div>
                    <button onClick={handleSubmit}>일기 저장</button>
                </div>
            </div>
        </div>
    );
};

export default DiaryEditor;