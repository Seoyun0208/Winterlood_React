import React, { useEffect, useState } from 'react';

const CountView = React.memo(({ count }) => {

    useEffect(() => {
        console.log(`Update :: Count : ${count}`);
    });

    return <div>{count}</div>
});

const TextView = React.memo(({ text }) => {

    useEffect(() => {
        console.log(`Update :: Text : ${text}`);
    });

    return <div>{text}</div>
});

const OptimizeTest = () => {

    const [count, setCount] = useState(1);
    const [text, setText] = useState('');

    return (
        <div className='OptimizeTest' style={{ padding: '50px' }}>
            <div>
                <h1>Count</h1>
                <CountView count={count} />
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div>
                <h1>text</h1>
                <TextView text={text} />
                <input value={text} onChange={e => setText(e.target.value)} />
            </div>
        </div>
    );
};

export default OptimizeTest;