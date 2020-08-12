import React, {ChangeEvent, useState} from 'react';
import {CountType} from '../../App';

export type SettingsPropsType = {
    addNewValue: (newCounterValue: CountType) => void;
    count: CountType
}
export const Settings: React.FC<SettingsPropsType> = (props) => {
    const [maxValue, setMaxValue] = useState(props.count.max);
    const [minValue, setMinValue] = useState(props.count.min);

    const changeMaxValue = (value: string) => {
        if (+value === +minValue || +value < 0 || +value < +minValue) {
            setMaxValue(+value);
            console.log('Incorrect value')
        } else {
            setMaxValue(+value);
            console.log('Enter values and press "set"')
        }
    };

    const changeMinValue = (value: string) => {
        if (+value === +maxValue || +value < 0 || +value > +maxValue) {
            setMinValue(+value);
            console.log('Incorrect value')
        } else {
            setMinValue(+value);
            console.log('Enter values and press "set"')
        }
    };

    let func = () => {
        localStorage.setItem('key12', JSON.stringify({min: minValue, max: maxValue}));
        let newCounterValue = { min: +minValue, max: +maxValue };
        console.log(newCounterValue);
        props.addNewValue(newCounterValue);
    };

    return (
        <div className={'settings'}>
            <Parameters minValue={minValue} maxValue={maxValue} changeMinValue={changeMinValue} changeMaxValue={changeMaxValue}/>
            <div className={'set'}>
                <button onClick={func}>SET</button>
            </div>
        </div>
    )
};

type ParametersType = {
    changeMaxValue: (value: string) => void
    changeMinValue: (value: string) => void
    maxValue: number
    minValue: number
}

export const Parameters: React.FC<ParametersType> = (props) => {

    const sendMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMaxValue(e.currentTarget.value)
    };

    const sendMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMinValue(e.currentTarget.value)
    };

    return (
        <div className={'values'}>
            <div className={'value'}>
                <span>max value:</span>
                <input value={props.maxValue} onChange={sendMaxValue} type="number"/>
            </div>
            <div className={'value'}>
                <span>start value:</span>
                <input value={props.minValue} onChange={sendMinValue} type="number"/>
            </div>
        </div>
    )
};


