import React, { Component, Suspense } from "react";
import { Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    return <Redirect to="/error" />
  }
}

export default Main;