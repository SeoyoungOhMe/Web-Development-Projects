import React from "react";

function strike() {
    document.getElementById("root").style.textDecoration = "line-through";
}

function App() {

    return 
    <div>
        <p>Buy milk</p>;
        <button onClick={strike} >Change to strike through</button>
    </div>
    
}

export default App;
