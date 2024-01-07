import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return <div>
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p></p>
  </div>
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card 
      tel="+123 456 789" 
      email="b@beyonce.com" 
      name="Beyonce" 
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    />
    <Card 
      tel="+987 654 321" 
      email="jack@nowhere.com" 
      name="Jack Bauer" 
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    />
  </div>,
  document.getElementById("root")
);
