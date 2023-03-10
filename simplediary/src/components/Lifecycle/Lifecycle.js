import React, { useEffect, useState } from 'react';

const Lifecycle = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    useEffect(() => {
        console.log('Mount!');
    }, []);

    useEffect(() => {
        console.log('Update!');
    });

    useEffect(() => {
        console.log(`count is update: ${count}`);
        if (count > 5) {
            alert('count 가 5를 넘었습니다. 따라서 1로 초기화힙니다.');
            setCount(1);
        }
    }, [count]);

    useEffect(() => {
        console.log(`text is update: ${text}`);
    }, [text]);

    return (
        <div className='Lifecycle' style={{ padding: '20px' }}>
            <div>
                {count}
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div>
                <input value={text} onChange={e => setText(e.target.value)} />
            </div>
        </div>
    );
};

export default Lifecycle;