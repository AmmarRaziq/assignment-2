"use client"

import React, {useState} from 'react';
import UserInput from '../UserInput/UserInput';
import Display from '../Display/Display';
import Sidebar from "@/component/Sidebar/Sidebar";

const Container = () => {
    const [currentTemperature,setCurrentTemperature] = useState("Waiting...");
    const [hourlyTemperature,setHourlyTemperature] = useState([]);
    const [display, setDisplay] = useState ("temperature")

    

    return (
        <div className={"container"}>
            <div className={"container-sidebar"}>
                <Sidebar changeDisplay={setDisplay} display={display}></Sidebar> 
            </div>
            <div className={"container-spa"}>
                <UserInput current={setCurrentTemperature} hourly={setHourlyTemperature}></UserInput>
                {display === "temperature" && <Display current={currentTemperature}hourly={hourlyTemperature} unit= {"°C"}></Display>}
                {display === "precipitation" && <Display current={currentTemperature}hourly={hourlyTemperature}unit= {"precipitation"}></Display>}
                {display === "wind" && <Display current={currentTemperature}hourly={hourlyTemperature}unit= {"km/h"}></Display>}
            </div>
            <style jsx>{`
                 .container {
                    display: flex;
                    flex-direction: row;
                    width: 100vw;
                    height: 100vh;
                }

                 .container-sidebar {
                    display: flex;
                    flex: 1 1;
                    
                    
                }


                 .container-spa {
                    flex: 5 5;
                    display: flex;
                    flex-direction: column;

                padding: 30px;
            }
            `}</style>
        </div>
    );
};

export default Container;