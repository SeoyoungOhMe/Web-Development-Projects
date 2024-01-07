import React, {useState} from "react";

function App() {

    const [fullName, setFullName] = useState({ // 객체화
        first: "",
        last: ""
    });

    function handleChange(event) {
        
        const {value, name} = event.target;

        setFullName((prevValue) => {
            if (name === "fName") {
                return {
                    first: value, // 입력받은 값으로 업데이트
                    last: prevValue.last
                };
            } else if (name === "lName") {
                return {
                    first: prevValue.first,
                    last: value // 입력받은 값으로 업데이트
                }
            }

        })
    }

  return (
    <div className="container">
      <h1>Hello {fullName.first} {fullName.last}</h1>
      <form>
        <input name="fName" placeholder="First Name" 
        value={fullName.first} 
        onChange={handleChange} />
        <input name="lName" placeholder="Last Name"  
        value={fullName.last} 
        onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
