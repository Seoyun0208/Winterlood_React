import React, { useEffect, useState } from 'react';

const UnmountTest = () => {

    useEffect(() => {
        console.log('Mount!');
        return () => {
            console.log('Unmount!');
        }
    }, []);

    return <span>
        Unmount Testing Component
    </span>
}

const Lifecycle2 = () => {

    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    return (
        <div className='Lifecycle2' style={{ padding: '20px' }}>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnmountTest />}
        </div>
    );
};

export default Lifecycle2;