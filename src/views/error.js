import React, { Component, Fragment } from "react";
import { Row, Card, CardTitle,Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Colxx } from "../components/common/CustomBootstrap";
import IntlMessages from "../helpers/IntlMessages";


class Error extends Component {
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <Fragment>
        <main>
          <div className="container h-100 d-flex-center flex-column">
            <h1 className="font-weight-bold" style={{ fontSize: '8em' }}>
              <span style={{ color: '#E95E54'}}>O</span>
              <span style={{ color: '#7393A8'}}>o</span>
              <span style={{color: 'pink'}}>p</span>
              <span style={{ color: '#B9D7B3'}}>s</span>
            </h1>
            <h4
              className="cursor-pointer"
              style={{ cursor: 'pointer' }}
              onClick={() => window.history.go(-1) }
            >
              go back
            </h4>
          </div>
        </main>
      </Fragment>
    );
  }
}
export default Error;
