import React, {useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter/Counter';
import {Settings} from './Components/Settings/Settings';


export function App() {

    let valueFromLocalStorage = () => {
        let loc = localStorage.getItem('key12');
        if (loc) {
            return Number(JSON.parse(loc).count);
        } else {
            return 0;
        }

    };


    const [count, setCount] = useState<number>(valueFromLocalStorage());

    const incCount = () => {
        setCount(count + 1);
    };
    const resetCount = () => {
        setCount(0)
    };

    return (
        <div className={'counter'}>
            <Settings />
            <Counter count={count}
                     incCount={incCount}
                     resetCount={resetCount}
            />
        </div>
    )
}


