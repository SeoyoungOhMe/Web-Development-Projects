import React from "react";
import contacts from "../contacts.js";

function Card(props) {
  return <div className="card" class="card">
    <div className="top" class="top">
      <h2 class="name">{props.name}</h2>
      <img class="circle-img"
        src={props.imgURL}
        alt="avatar_img"
      />
    </div>
    <div className="bottom" class="bottom">
      <p class="info">{props.phone}</p>
      <p class="info">{props.email}</p>
    </div>
  </div>
}

function App() {
  return (
    <div>
      <h1 className="heading" class="heading">My Contacts</h1>

      <Card 
        name = {contacts[0].name}
        imgURL = {contacts[0].imgURL}
        phone = {contacts[0].phone}
        email = {contacts[0].email}
      />
      <Card 
        name = {contacts[1].name}
        imgURL = {contacts[1].imgURL}
        phone = {contacts[1].phone}
        email = {contacts[1].email}
      />
      <Card 
        name = {contacts[2].name}
        imgURL = {contacts[2].imgURL}
        phone = {contacts[2].phone}
        email = {contacts[2].email}
      />  
    
    </div>
  );
}

export default App;
