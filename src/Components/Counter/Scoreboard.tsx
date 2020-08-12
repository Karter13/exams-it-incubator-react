import React from 'react';
import {CountType} from '../../App';

export type ScoreboardPropsType = {
    count: CountType;
}

export const Scoreboard: React.FC<ScoreboardPropsType> = (props) => {
    return (
        <div className={props.count.min === props.count.max ? 'button-red' : ''}>{props.count.min}</div>
    )
};
