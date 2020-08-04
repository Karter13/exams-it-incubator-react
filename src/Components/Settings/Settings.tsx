import React from 'react';

export type SettingsPropsType = {}
export const Settings = () => {
    return (
        <div className={'settings'}>
            <div className={'values'}>
                <div className={'value'}>
                    <span>max value:</span>
                    <input type="number"/>
                </div>
                <div className={'value'}>
                    <span>start value:</span>
                    <input type="number"/>
                </div>
            </div>
            <div className={'set'}>
                <button>SET</button>
            </div>
        </div>
    )
};
