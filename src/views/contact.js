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

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {

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
    } = this.state;

    const delay = false;

    const location = {
      pathname: '/',
      state: { fromContact: true }
    }

    return (
      <Row className="h-100 m-0">
        {/* <div className="header hover-to-blue mt-3" onClick={() => this.props.history.push(location)}>← back to home</div> */}
        <Colxx xxs="12" className="contact-container p-0 mt-2 d-flex align-items-center">
          <div className="header hover-to-blue my-4 text-left w-100 back" onClick={() => this.props.history.push(location)}>← back</div>
          <div className={`main-floating-container mt-4 ${!delay ? "no-delay" : ""}`}>
            <div className="letter-container d-flex-center">
              <div className="letter-background">
                <div className="letter p-5">

                  <div className="letter-form-group mb-5">
                    <div className="letter-heading">
                      Email:
                    </div>
                    <div className="letter-input">
                      <input type="text" />
                    </div>
                  </div>

                  <div className="letter-form-group mb-5">
                    <div className="letter-heading">
                      Subject:
                    </div>
                    <div className="letter-input">
                      <input type="text" />
                    </div>
                  </div>

                  <div className="letter-form-group">
                    <div className="letter-heading">
                      Message:
                    </div>
                    <div className="letter-input">
                      <textarea name="" id="" cols="30" rows="10">

                      </textarea>
                    </div>
                  </div>

                  <div className="letter-btn">
                    Send
                  </div>

                </div>
              </div>
            </div>
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
)(Contact);