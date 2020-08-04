import React, {useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter/Counter';
import {Settings} from './Components/Settings/Settings';


export function App() {

    const [count, setCount] = useState<number>(0);

    const incCount = () => {
        setCount(count + 1);
    };
    const resetCount = () => {
        setCount(0)
    };

    return (
        <div className={'counter'}>
            <Settings/>
            <Counter count={count}
                     incCount={incCount}
                     resetCount={resetCount}
            />
        </div>
    )
}


