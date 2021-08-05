import React from "react";
import Images from "./components/Images.js";
import Countries from "./components/Countries.js";

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <Countries />
          <Images />
        </div>
      </>
    );
  }
}
