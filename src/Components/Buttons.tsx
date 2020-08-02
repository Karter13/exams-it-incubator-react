import React from 'react';
import {Button} from './Button/Button';

export type ButtonsPropsType = {
    resetCount: () => void
    incCount: () => void
    count: number
}

export const ButtonsGroup: React.FC<ButtonsPropsType> = (props) => {
    return (
        <div className= 'buttons'>
            <Button
                changeCounter={props.incCount}
                    stile={'buttons-inc '}
                    disable={props.count === 5 ? true : ''}
                    value={'INC'}
            />
            <Button changeCounter={props.resetCount}
                    stile='buttons-reset'
                    disable={props.count === 0 ? true : ''}
                    value={'RESET'}
            />
        </div>
    )
};
