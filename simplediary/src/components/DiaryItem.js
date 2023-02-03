import React, { useRef, useState } from 'react';

const DiaryItem = ({ id, author, content, emotion, created_date, onRemove, onSave }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [localContent, setLocalContent] = useState(content);
    const localContentTextArea = useRef('');
    const toggleIsEdit = () => setIsEdit(!isEdit);

    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    }

    const handleSave = () => {
        if (content === localContent) {
            alert('변경된 내용이 없습니다.');
            localContentTextArea.current.focus();
            return;
        }

        if (localContent.length < 5) {
            localContentTextArea.current.focus();
            return;
        }

        if (window.confirm(`${id}번째 일기를 정말 수정하시겠습니까?`)) {
            onSave(id, localContent);
            setIsEdit(false);
        }
    }

    const handleRemove = () => {
        if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onRemove(id);
        }
    }

    return (
        <div className='DiaryItem'>
            <div className="info">
                <span>작성자: {author} | 감정 점수: {emotion}</span>
                <br />
                <span className='date'>{new Date(created_date).toLocaleString()}</span>
            </div>
            <div className='content'>
                {isEdit ?
                    <>
                        <textarea value={localContent} onChange={e => setLocalContent(e.target.value)} ref={localContentTextArea} />
                    </> :
                    <>
                        {content}
                    </>
                }
            </div>
            <div className='buttons'>
                {isEdit ?
                    <>
                        <button onClick={handleQuitEdit}>취소</button>
                        <button onClick={handleSave}>저장</button>
                    </> :
                    <>
                        <button onClick={toggleIsEdit}>수정</button>
                        <button onClick={handleRemove}>삭제</button>
                    </>}
            </div>
        </div>
    );
};

export default DiaryItem;