// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

var tesla = cars[1];
var teslaTopSpeed = tesla.speedStats.topSpeed;
var teslaTopColour = tesla.coloursByPopularity[0];

var honda = cars[0];
var hondaTopSpeed = honda.speedStats.topSpeed;
var hondaTopColour = honda.coloursByPopularity[0];

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
