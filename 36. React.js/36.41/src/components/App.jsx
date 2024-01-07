import React, { useState } from "react";

function App() {

    const [text, setText] = useState("");
    const [arr, setArr] = useState([]);

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleClick(event) {
        
        const value  = event.target.value;

        setArr(prevValue => {
            return [...prevValue, text];    
        });

        setText("");

    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text"
            name="text"
            onChange={handleChange} 
            value={text}
         />
        <button 
            onClick={handleClick} 
            value={text}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
            {arr.map(todoItem => (
                <li>{todoItem}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
