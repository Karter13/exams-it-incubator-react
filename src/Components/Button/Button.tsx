import React from 'react';

export type ButtonsPropsType = {
    changeCounter: () => void
    stile: string
    disable: any
    value: string
}

export const Button: React.FC<ButtonsPropsType> = (props) => {
    return (
        <div className= 'button'>
            <button onClick={props.changeCounter}
                    className={props.stile}
                    disabled={props.disable}
            >{props.value}</button>
        </div>
    )
};
