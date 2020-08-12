import React, {useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter/Counter';
import {Settings} from './Components/Settings/Settings';

export type CountType = {
    min: number
    max: number
}

export function App() {
//fixed
    const [count, setCount] = useState<CountType>(valueFromLocalStorage());

    function valueFromLocalStorage() {
        let loc = localStorage.getItem('key12');
        if (loc) {
            let newCounter = JSON.parse(loc);
            return {
                min: newCounter.min,
                max: +newCounter.max
            }

        } else {
            return {min: 0, max: 1};
        }
    }


    const incCount = () => {
        let newCountMin = {
            ...count,
            min: count.min + 1
        };
        setCount(newCountMin);

    };
    const resetCount = () => {
        let loc = localStorage.getItem('key12');
        if (loc) {
            let minCount = JSON.parse(loc)
            let counterReset = {
                ...count,
                min: count.min = +minCount.min
            };
            setCount(counterReset);
        }
    };

    const addNewCounterValue = (value: CountType) => {
        setCount(value)
    };

    return (
        <div className={'counter'}>
            <Settings addNewValue={addNewCounterValue}
                      count={count}/>
            <Counter count={count}
                     incCount={incCount}
                     resetCount={resetCount}
            />
        </div>
    )
}


