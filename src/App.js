import React from "react";
import Images from "./components/Persons.js";
import Persons from "./components/Countries.js";

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <Persons />
          <Images />
        </div>
      </>
    );
  }
}
