import React from "react";
import axios from "axios";

export default class Countries extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    axios
      .get(`https://restcountries.eu/rest/v2/all?fields=name`)
      .then((res) => {
        const countries = res.data;
        this.setState({ countries });
      });
  }

  render() {
    return (
      <>
        <div>
        <h1>Nombre de países</h1>
          <select>
            {this.state.countries.map((countries) => (
              <option>{countries.name}</option>
            ))}
          </select>
        </div>
      </>
    );
  }
}
