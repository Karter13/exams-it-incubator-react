import React, {ChangeEvent, useState} from 'react';
import {CountType} from '../../App';
import styles from './Settings.module.css'

export type SettingsPropsType = {
    addNewValue: (newCounterValue: CountType) => void;
    count: CountType
}
export const Settings: React.FC<SettingsPropsType> = (props) => {
    const [maxValue, setMaxValue] = useState(props.count.max);
    const [minValue, setMinValue] = useState(props.count.min);
    const [block, setBlock] = useState<boolean>(false);

    const changeMaxValue = (value: string) => {
        if (Number(value) === Number(minValue) || Number(value) < 0 || Number(value) < Number(minValue)) {
            setBlock(true);
            setMaxValue(Number(value));
            console.log('Incorrect value')
        } else {
            setBlock(false);
            setMaxValue(Number(value));
            console.log('Enter values and press "set"')
        }
    };

    const changeMinValue = (value: string) => {
        if (Number(value) === Number(maxValue) || Number(value) < 0 || Number(value) > Number(maxValue)) {
            setBlock(true);
            setMinValue(Number(value));
            console.log('Incorrect value')
        } else {
            setBlock(false);
            setMinValue(Number(value));
            console.log('Enter values and press "set"')
        }
    };


    let sendData = () => {
        if (minValue === maxValue || minValue > maxValue || minValue < 0) {
            console.log('BAD VALUES')
        } else {
            localStorage.setItem('key12', JSON.stringify({min: minValue, max: maxValue}));
            let newCounterValue = {min: Number(minValue), max: Number(maxValue)};
            console.log(newCounterValue);
            props.addNewValue(newCounterValue);
        }
    };

    return (
        <div className={'settings'}>
            <Parameters minValue={minValue}
                        maxValue={maxValue}
                        changeMinValue={changeMinValue}
                        changeMaxValue={changeMaxValue}
                        block={block}
            />
            <div className={'set'}>
                <button onClick={sendData} disabled={block}>SET</button>
            </div>
        </div>
    )
};

type ParametersType = {
    changeMaxValue: (value: string) => void
    changeMinValue: (value: string) => void
    maxValue: number
    minValue: number
    block: boolean
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
                <input className={props.block ? styles.error : styles.true} value={props.maxValue}
                       onChange={sendMaxValue} type="number"/>
            </div>
            <div className={'value'}>
                <span>start value:</span>
                <input className={props.block ? styles.error : styles.true} value={props.minValue}
                       onChange={sendMinValue} type="number"/>
            </div>
        </div>
    )
};


