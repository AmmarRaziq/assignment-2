"use client"

import React, {useState} from 'react';
import UserInput from '../UserInput/UserInput';
import Display from '../Display/Display';

const Container = () => {
    const [currentTemperature,setCurrentTemperature] = useState("Waiting...");
    const [hourlyTemperature,setHourlyTemperature] = useState([]);
    return (
        <div>
            <div>

            </div>
            <div className={"spa-container"}>
                <UserInput current={setCurrentTemperature} hourly={setHourlyTemperature}></UserInput>
                <Display current={currentTemperature} hourly={hourlyTemperature}></Display>
            </div>
            <style jsx>{`
            .spa-container {
                display: flex;
                flex-direction: column;

                padding: 30px;
            }
            `}</style>
        </div>
    );
};

export default Container;