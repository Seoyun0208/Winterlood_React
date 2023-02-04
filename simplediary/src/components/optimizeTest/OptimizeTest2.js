import React, { useEffect, useState } from 'react';


const CounterA = React.memo(({ count }) => {

    useEffect(() => {
        console.log(`CounterA Update - count: ${count}`);
    });

    return <div>{count}</div>
});

const CounterB = ({ obj }) => {

    useEffect(() => {
        console.log(`CounterB Update - count: ${obj.count}`);
    });

    return <div>{obj.count}</div>
};

const areEqual = (prev, next) => {
    return prev.obj.count === next.obj.count;
}

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest2 = () => {

    const [count, setCount] = useState(1);
    const [obj, setObj] = useState({
        count: 1
    });

    return (
        <div className='OptimizeTest2' style={{ padding: '50px' }}>
            <div>
                <h1>CounterA</h1>
                <CounterA count={count} />
                <button onClick={() => setCount(count)}>A button</button>
            </div>
            <div>
                <h1>CounterB</h1>
                <MemoizedCounterB obj={obj} />
                <button onClick={() => setObj({
                    count: obj.count
                })}>B button</button>
            </div>
        </div>
    );
};

export default OptimizeTest2;