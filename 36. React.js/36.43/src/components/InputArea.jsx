import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input value={props.value}
      onChange={(event) => {
        props.onChange(event);
      }} 
      type="text" />
      <button 
      onClick={() => {
        props.onClick();
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
