import React, { useState } from "react";

function App() {

    const [time, setTime] = useState("TIME");

    function timeset() {
        setTime(new Date().toLocaleTimeString());
    }
    setInterval(timeset, 1000);
 
    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={ timeset }>Get Time</button>
        </div>
    );
}

export default App;
