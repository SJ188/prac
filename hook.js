import React, { useState } from "react";

const Hook2useState=()=>{
    const [counter,setCounter]= useState(0)
    const increment=()=>{
        setCounter(counter+1)
    };
    return(
        <div>
            {counter}<br/>
            <button onClick={increment}>Increment</button>
        </div>
    );
    }
    export default Hook2useState;
