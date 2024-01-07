import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      {
        props.isRegistered === false ? <div>
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
        </div>
         : null
      }
    </form>
  );
}

export default Form;
