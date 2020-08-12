import React from 'react';
import {Button} from '../Button/Button';
import {CountType} from '../../App';

export type ButtonsPropsType = {
    resetCount: () => void
    incCount: () => void
    count: CountType
}

export const ButtonsGroup: React.FC<ButtonsPropsType> = (props) => {
    return (
        <div className= 'buttons'>
            <Button
                changeCounter={props.incCount}
                    stile={'buttons-inc '}
                    disable={props.count.min === props.count.max ? true : ''}
                    value={'INC'}
            />
            <Button changeCounter={props.resetCount}
                    stile='buttons-reset'
                    disable={props.count.min === 0 ? true : ''}
                    value={'RESET'}
            />
        </div>
    )
};
