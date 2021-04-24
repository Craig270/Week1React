import React from "react";
import moag from "../moag.jpg";
//Had to mess around with adding an image and another component
export default class Pic extends React.Component {
  render() {
    return (
      <img
        src={moag}
        class="rounded mx-auto d-block"
        id="Pic"
        alt="Responsive image"
      />
    );
  }
}
