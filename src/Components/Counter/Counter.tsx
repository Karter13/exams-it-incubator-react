import React from 'react';
import {Scoreboard} from './Scoreboard';
import {ButtonsGroup} from './Buttons';

export type CounterPropsType = {
    count: number
    resetCount: () => void
    incCount: () => void
}
export const Counter: React.FC<CounterPropsType> = (props) => {
    return (
        <div className='desk'>
            <div className='scoreboard'>
                <Scoreboard count={props.count}/>
            </div>
            <div className='buttons-block'>
                <ButtonsGroup count={props.count} resetCount={props.resetCount} incCount={props.incCount}/>

            </div>
        </div>
    )
};
