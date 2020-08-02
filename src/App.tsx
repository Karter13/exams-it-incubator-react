import React, {useState} from 'react';
import './App.css';
import {ButtonsGroup} from './Components/Buttons';
import {Scoreboard} from './Components/Scoreboard';


export function App() {

    const [count, setCount] = useState<number>(0);

    const incCount = () => {
        setCount(count + 1);
    };
    const resetCount = () => {
        setCount(0)
    };

    return (
        <div className='desk'>
            <div className='scoreboard'>
                <Scoreboard count={count}/>
            </div>
            <div className='buttons-block'>
                <ButtonsGroup count={count} resetCount={resetCount} incCount={incCount}/>

            </div>
        </div>
    )
}






