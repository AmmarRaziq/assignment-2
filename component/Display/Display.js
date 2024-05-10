"use client"
import React from 'react';

const Display = ({current, hourly}) => {
    return (
        <div className={"display"}>
           <div className={"display-container"}>
               <h1>{current} °C</h1>
               <h2>{JSON.stringify(hourly)}</h2>
          </div>

          <style jsx>{`
              .display{
                  display: flex;
                  justify-content: center;
                  justify-item: start;
                  padding-top: 40px;
             } 

             .display-container {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%
             }

            h1 {
                font-size: 4em:
             }

          `}</style>
        </div>
        
    );
};

export default Display;