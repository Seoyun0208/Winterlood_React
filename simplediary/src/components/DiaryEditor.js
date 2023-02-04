import React, { useState, useRef, useEffect } from 'react';

const DiaryEditor = ({ onCreate }) => {

    useEffect(() => {
        console.log('DiaryEditor 렌더');
    });

    const [state, setState] = useState({
        author: '',
        content: '',
        emotion: '1'
    });

    const authorInput = useRef('');
    const contentTextarea = useRef('');

    const handleChangeState = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        if (state.author.length < 1) {
            authorInput.current.focus();
            return;
        }
        if (state.content.length < 5) {
            contentTextarea.current.focus();
            return;
        }

        onCreate(state.author, state.content, state.emotion);
        alert('저장 성공');
        setState({
            author: '',
            content: '',
            emotion: 1
        });
    }

    return (
        <div className='DiaryEditor'>
            <div className="wrapper">
                <h1>오늘의 일기</h1>
                <div>
                    <input name='author' value={state.author} onChange={handleChangeState} ref={authorInput} />
                </div>
                <div>
                    <textarea name='content' value={state.content} onChange={handleChangeState} ref={contentTextarea} />
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

export default React.memo(DiaryEditor);