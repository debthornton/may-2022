import React, { Component } from "react";
import { Row, Card, CardTitle, Label, FormGroup, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { NotificationManager } from "../components/common/react-notifications";
import { Formik, Form, Field } from "formik";

import { loginUser } from "../redux/actions";
import { Colxx } from "../components/common/CustomBootstrap";
import IntlMessages from "../helpers/IntlMessages";

import { Icon, InlineIcon } from '@iconify/react';
import reduxIcon from '@iconify-icons/simple-icons/redux';
import jqueryIcon from '@iconify-icons/simple-icons/jquery';

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSkills: false,
      works: [
        {
          name: "Healthjump",
          url: "https://support.healthjump.com/hc/en-us",
          description: "",
          image: "",
          toolset: ["html, css, js"],
          font: "Nunito",
          background: '#0c2e3e',
          color: 'white'
        },
        {
          name: "FANSí SCHMANSí",
          url: "https://debthornton.github.io/Fansi-Schmansi/",
          description: "",
          image: "",
          toolset: ["html, css, js"],
          font: "Playfair Display",
          background: '#373737',
          color: '#F2EDDE',
          class: 'fansi'
        },
        {
          name: "SYZYGY",
          url: "https://debthornton.github.io/Syzygy",
          description: "",
          image: "",
          toolset: ["html, css, js"],
          font: "Raleway",
          background: '#0E0D0D',
          color: '#B6B6B6'
        },
        {
          name: "filmscope",
          url: "https://debthornton.github.io/Film-Scope/",
          description: "",
          image: "",
          toolset: ["html, css, js"],
          font: "Pacifico",
          background: '#912222',
          color: '#FFFFFF'
        }, {
          name: "VidClock",
          url: "https://debthornton.github.io/VidClock/",
          description: "",
          image: "",
          toolset: ["html, css, js"],
          font: "Orbitron",
          background: '#385A62',
          color: 'white'
        },
        {
          name: "DUMDRUM",
          url: "https://debthornton.github.io/DumDrum/",
          description: "",
          image: "",
          toolset: ["html, css, js"],
          font: "Permanent Marker",
          background: '#D27032',
          color: '#F7E414'
        },
        // {
        //   name: "debxdev",
        //   url: "",
        //   description: "",
        //   image: "",
        //   toolset: ["html, css, js"],
        //   font: "Work Sans"
        // }
      ]
    };
  }

  onUserLogin = (values) => {
    if (!this.props.loading) {
      if (values.email !== "" && values.password !== "") {
        this.props.loginUser(values, this.props.history);
      }
    }
  }

  validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Please enter your email address";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  validatePassword = (value) => {
    let error;
    if (!value) {
      error = "Please enter your password";
    } else if (value.length < 4) {
      error = "Value must be longer than 3 characters";
    }
    return error;
  }

  componentDidUpdate() {
    if (this.props.error) {
      NotificationManager.warning(
        this.props.error,
        "Login Error",
        3000,
        null,
        null,
        ''
      );
    }
  }

  toggleShowSkills = () => {
    this.setState({ showSkills: !this.state.showSkills });
  }

  render() {
    let {
      showSkills,
      works
    } = this.state;

    const location = {
      pathname: '/',
      state: { fromWorks: true }
    }

    return (
      <Row className="d-flex-center h-100 m-0">
        <Colxx xxs="12" className="works-container p-0">
          <div className="card-container d-flex-center wrap h-100">
            {/* <NavLink to={"/"}> */}
              <div className="header hover-to-blue mt-3" onClick={() => this.props.history.push(location)}>← back</div>
            {/* </NavLink> */}
            <Row className="w-100 h-50 justify-content-center works-row">
              {works.map((work, index) => {

                return (
                  <Colxx xxs="12" md="4" lg="3" key={index} className="d-flex-center p-0 mx-2">
                    <div className={`w-100 d-flex-center ${work.class ? work.class : work.name}`}>
                      <Card
                        className="p-4 works-card d-flex-center mb-5"
                        style={{
                          animationDelay: `${(index * 0.2)}s`,
                          fontFamily: `${work.font}, sans-serif`,
                          background: work.background,
                          color: work.color
                        }}
                        onClick={() => {
                          window.open(work.url, '_blank');
                        }}
                      >
                        {work.name === 'Healthjump' && <img alt='Healthjump' src='/assets/img/logo_with_icon_white.svg' />}
                        {work.name !== 'Healthjump' && work.name}
                      </Card>
                    </div>
                  </Colxx>
                )
              })}
            </Row>
          </div>
        </Colxx>
      </Row>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  const { user, loading, error } = authUser;
  return { user, loading, error };
};

export default connect(
  mapStateToProps,
  {
    loginUser
  }
)(Works);