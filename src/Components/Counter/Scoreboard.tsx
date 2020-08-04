import React from 'react';

export type ScoreboardPropsType = {
    count: number;
}

export const Scoreboard: React.FC<ScoreboardPropsType> = (props) => {
    return (
        <div className={props.count === 5 ? 'button-red' : ''}>{props.count}</div>
    )
};
