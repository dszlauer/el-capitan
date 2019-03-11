import React, { Component } from "react";
import axios from "axios";

import routes from "./routes";
import Header from "./components/Header/Header";
import "./reset.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

  componentDidMount() {
    axios.get("/api/user-data").then(response => {
      this.setState({
        user: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
