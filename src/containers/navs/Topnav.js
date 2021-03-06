import React, { Component } from "react";
import { injectIntl } from "react-intl";

import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Input
} from "reactstrap";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import IntlMessages from "../../helpers/IntlMessages";
import {
  setContainerClassnames,
  clickOnMobileMenu,
  logoutUser,
  changeLocale
} from "../../redux/actions";

import {
  menuHiddenBreakpoint,
  searchPath,
  localeOptions,
  isDarkSwitchActive
} from "../../constants/defaultValues";

import { MobileMenuIcon, MenuIcon } from "../../components/svg";
import TopnavEasyAccess from "./Topnav.EasyAccess";
import TopnavNotifications from "./Topnav.Notifications";
import TopnavDarkSwitch from "./Topnav.DarkSwitch";

import { getDirection, setDirection } from "../../helpers/Utils";

class TopNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInFullScreen: false,
      searchKeyword: ""
    };
  }

  handleChangeLocale = (locale, direction) => {
    this.props.changeLocale(locale);

    const currentDirection = getDirection().direction;
    if (direction !== currentDirection) {
      setDirection(direction);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };
  isInFullScreen = () => {
    return (
      (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement &&
        document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement &&
        document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null)
    );
  };
  handleSearchIconClick = e => {
    if (window.innerWidth < menuHiddenBreakpoint) {
      let elem = e.target;
      if (!e.target.classList.contains("search")) {
        if (e.target.parentElement.classList.contains("search")) {
          elem = e.target.parentElement;
        } else if (
          e.target.parentElement.parentElement.classList.contains("search")
        ) {
          elem = e.target.parentElement.parentElement;
        }
      }

      if (elem.classList.contains("mobile-view")) {
        this.search();
        elem.classList.remove("mobile-view");
        this.removeEventsSearch();
      } else {
        elem.classList.add("mobile-view");
        this.addEventsSearch();
      }
    } else {
      this.search();
    }
  };
  addEventsSearch = () => {
    document.addEventListener("click", this.handleDocumentClickSearch, true);
  };
  removeEventsSearch = () => {
    document.removeEventListener("click", this.handleDocumentClickSearch, true);
  };

  handleDocumentClickSearch = e => {
    let isSearchClick = false;
    if (
      e.target &&
      e.target.classList &&
      (e.target.classList.contains("navbar") ||
        e.target.classList.contains("simple-icon-magnifier"))
    ) {
      isSearchClick = true;
      if (e.target.classList.contains("simple-icon-magnifier")) {
        this.search();
      }
    } else if (
      e.target.parentElement &&
      e.target.parentElement.classList &&
      e.target.parentElement.classList.contains("search")
    ) {
      isSearchClick = true;
    }

    if (!isSearchClick) {
      const input = document.querySelector(".mobile-view");
      if (input && input.classList) input.classList.remove("mobile-view");
      this.removeEventsSearch();
      this.setState({
        searchKeyword: ""
      });
    }
  };
  handleSearchInputChange = e => {
    this.setState({
      searchKeyword: e.target.value
    });
  };
  handleSearchInputKeyPress = e => {
    if (e.key === "Enter") {
      this.search();
    }
  };

  search = () => {
    this.props.history.push(searchPath + "/" + this.state.searchKeyword);
    this.setState({
      searchKeyword: ""
    });
  };

  toggleFullScreen = () => {
    const isInFullScreen = this.isInFullScreen();

    var docElm = document.documentElement;
    if (!isInFullScreen) {
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    this.setState({
      isInFullScreen: !isInFullScreen
    });
  };

  handleLogout = () => {
    this.props.logoutUser(this.props.history);
  };

  menuButtonClick = (e, menuClickCount, containerClassnames) => {
    e.preventDefault();

    setTimeout(() => {
      var event = document.createEvent("HTMLEvents");
      event.initEvent("resize", false, false);
      window.dispatchEvent(event);
    }, 350);
    this.props.setContainerClassnames(
      ++menuClickCount,
      containerClassnames,
      this.props.selectedMenuHasSubItems
    );
  };
  mobileMenuButtonClick = (e, containerClassnames) => {
    e.preventDefault();
    this.props.clickOnMobileMenu(containerClassnames);
  };

  render() {
    const { containerClassnames, menuClickCount, locale } = this.props;
    const { messages } = this.props.intl;
    const contacts = [
      {
        name: "GitHub",
        link: "https://github.com/debthornton",
        icon: "fab fa-github"
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/deb-thornton-870a5817a/",
        icon: "fab fa-linkedin"
      },
      {
        name: "CodePen",
        link: "https://codepen.io/debthornton/",
        icon: "fab fa-codepen"
      }
    ]

    // console.log(this.props.history.location);
    const location = {
      pathname: '/',
      state: { fromTopNav: true }
    }


    return (
      <nav className={`navbar fixed-top ${this.props.history.location.pathname === "/" ? "main-page-active" : ""}`}>


        {/* ----------- LEFT SIDE ----------- */}


        <div className="d-flex align-items-center navbar-left">
          {/* <NavLink
            to="#"
            location={{}}
            className="menu-button d-none d-md-block"
            onClick={e =>
              this.menuButtonClick(e, menuClickCount, containerClassnames)
            }
          >
            <MenuIcon />
          </NavLink> */}
          <NavLink
            to="#"
            location={{}}
            className="menu-button-mobile d-xs-block d-sm-block d-md-none"
            onClick={e => this.mobileMenuButtonClick(e, containerClassnames)}
          >
            <MobileMenuIcon />
          </NavLink>

          <div className="navbar-logo" onClick={() => this.props.history.push(location)}>
            {/* <span className="logo d-none d-xs-block" />
            <span className="logo-mobile d-block d-xs-none" /> */}
            <svg id="Layer_1" data-name="Layer 1" className="deb-logo-small"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4756.74 674.69">
              <path className="cls-1" d="M1517.52,337.37V253.71h81.2v-114h98.43v114h108.27v83.66H1697.15V509.62q0,29.52,11.07,46.75t43.88,17.23a158.78,158.78,0,0,0,28.71-2.87q15.57-2.87,24.61-9.44v82.84q-15.59,7.39-38.14,10.26a320.47,320.47,0,0,1-39.78,2.87q-39.37,0-64.39-8.61t-39.37-26.25q-14.35-17.62-19.69-43.88t-5.33-60.7V337.37Z" transform="translate(-15.11 -7.05)" />
              <path className="cls-1" d="M1969.45,308.66h1.64q11.48-24.6,40.6-44.7t75-20.09q39.38,0,66.85,13.12t44.7,34.45a130.6,130.6,0,0,1,24.61,49.21,226.85,226.85,0,0,1,7.38,58.24V647.42h-98.43V448.1q0-16.39-1.64-36.5a131.66,131.66,0,0,0-8.61-37.73,70.8,70.8,0,0,0-21.73-29.53q-14.77-11.88-40.2-11.89-24.6,0-41.42,8.2a79.76,79.76,0,0,0-27.88,22.15,88.07,88.07,0,0,0-16,32,142.77,142.77,0,0,0-4.92,37.73v214.9H1871V27.33h98.43Z" transform="translate(-15.11 -7.05)" />
              <path className="cls-1" d="M2309.83,450.56q0-46.76,16.82-84.89t45.52-65.21q28.7-27.06,68.08-41.83a244.47,244.47,0,0,1,167.32,0q39.38,14.76,68.08,41.83t45.52,65.21Q2738,403.82,2738,450.56t-16.82,84.9q-16.82,38.13-45.52,65.2t-68.08,41.83a244.32,244.32,0,0,1-167.32,0q-39.37-14.76-68.08-41.83t-45.52-65.2Q2309.82,497.31,2309.83,450.56Zm98.43,0a127.86,127.86,0,0,0,7.79,44.29,110.69,110.69,0,0,0,23,37.73,114,114,0,0,0,36.5,26.25q21.32,9.84,48.39,9.84t48.39-9.84a114.19,114.19,0,0,0,36.5-26.25,111,111,0,0,0,23-37.73,129.8,129.8,0,0,0,0-88.58,111.38,111.38,0,0,0-23-37.73,114.65,114.65,0,0,0-36.5-26.25q-21.33-9.84-48.39-9.84t-48.39,9.84a114.43,114.43,0,0,0-36.5,26.25,111.07,111.07,0,0,0-23,37.73A128,128,0,0,0,2408.26,450.56Z" transform="translate(-15.11 -7.05)" />
              <path className="cls-1" d="M2817.54,253.71H2916v62.34h1.65q16.39-34.46,46.75-53.32t69.72-18.86a94.32,94.32,0,0,1,17.63,1.64q8.61,1.65,17.64,4.1v95.14q-12.32-3.25-24.2-5.33a138.24,138.24,0,0,0-23.38-2.05q-34.44,0-55.36,12.72t-32,29.11q-11.07,16.43-14.76,32.81t-3.7,24.61v210.8h-98.42Z" transform="translate(-15.11 -7.05)" />
              <path className="cls-1" d="M3139.05,253.71h93.51v63.16h1.64q13.93-29.53,42.65-51.27t77.92-21.73q39.38,0,66.85,13.12t44.7,34.45a130.75,130.75,0,0,1,24.61,49.21,226.85,226.85,0,0,1,7.38,58.24V647.42h-98.43V448.1q0-16.39-1.64-36.5a131.66,131.66,0,0,0-8.61-37.73,70.82,70.82,0,0,0-21.74-29.53q-14.76-11.88-40.19-11.89-24.6,0-41.42,8.2a79.8,79.8,0,0,0-27.89,22.15,88.21,88.21,0,0,0-16,32,142.77,142.77,0,0,0-4.92,37.73v214.9h-98.43Z" transform="translate(-15.11 -7.05)" />
              <path className="cls-1" d="M3551.61,337.37V253.71h81.21v-114h98.42v114h108.27v83.66H3731.24V509.62q0,29.52,11.08,46.75t43.88,17.23a159,159,0,0,0,28.71-2.87q15.57-2.87,24.6-9.44v82.84q-15.59,7.39-38.14,10.26a320.34,320.34,0,0,1-39.78,2.87q-39.37,0-64.39-8.61t-39.37-26.25q-14.35-17.62-19.68-43.88t-5.33-60.7V337.37Z" transform="translate(-15.11 -7.05)" />
              <path className="cls-1" d="M3884.62,450.56q0-46.76,16.81-84.89T3947,300.46q28.71-27.06,68.08-41.83a244.5,244.5,0,0,1,167.33,0q39.36,14.76,68.08,41.83T4296,365.67q16.8,38.15,16.81,84.89T4296,535.46q-16.83,38.13-45.52,65.2t-68.08,41.83a244.35,244.35,0,0,1-167.33,0q-39.36-14.76-68.08-41.83t-45.52-65.2Q3884.62,497.31,3884.62,450.56Zm98.42,0a127.63,127.63,0,0,0,7.8,44.29,110.82,110.82,0,0,0,23,37.73,114.08,114.08,0,0,0,36.5,26.25q21.32,9.84,48.39,9.84t48.4-9.84a114.41,114.41,0,0,0,36.5-26.25,111.13,111.13,0,0,0,23-37.73,129.64,129.64,0,0,0,0-88.58,111.52,111.52,0,0,0-23-37.73,114.87,114.87,0,0,0-36.5-26.25q-21.35-9.84-48.4-9.84t-48.39,9.84a114.54,114.54,0,0,0-36.5,26.25,111.2,111.2,0,0,0-23,37.73A127.8,127.8,0,0,0,3983,450.56Z" transform="translate(-15.11 -7.05)" />
              <path className="cls-1" d="M4392.32,253.71h93.51v63.16h1.64q13.94-29.53,42.65-51.27T4608,243.87q39.38,0,66.85,13.12t44.7,34.45a130.6,130.6,0,0,1,24.61,49.21,226.85,226.85,0,0,1,7.38,58.24V647.42h-98.43V448.1q0-16.39-1.64-36.5a131.66,131.66,0,0,0-8.61-37.73,70.74,70.74,0,0,0-21.74-29.53q-14.76-11.88-40.19-11.89-24.6,0-41.42,8.2a79.89,79.89,0,0,0-27.89,22.15,88.21,88.21,0,0,0-16,32,142.77,142.77,0,0,0-4.92,37.73v214.9h-98.43Z" transform="translate(-15.11 -7.05)" />
              <path className="cls-2 letter-d" d="M366.76,592.58h-1.64q-21.35,36.1-57.42,52.49t-77.92,16.41q-45.94,0-81.61-16A182.57,182.57,0,0,1,87.06,601.6Q61.64,573.73,48.51,536t-13.12-81.2q0-43.47,13.94-81.2t39-65.62a179.67,179.67,0,0,1,60.29-43.88q35.25-16,77.1-16,27.87,0,49.21,5.75a170.15,170.15,0,0,1,37.73,14.76,151.8,151.8,0,0,1,27.89,19.27A141.86,141.86,0,0,1,359.38,308h2.46V31.55h98.42V651.63h-93.5ZM133.81,454.78a127.67,127.67,0,0,0,7.8,44.29,110.82,110.82,0,0,0,23,37.73,114.08,114.08,0,0,0,36.5,26.25q21.33,9.84,48.4,9.84t48.39-9.84a114.41,114.41,0,0,0,36.5-26.25,111.13,111.13,0,0,0,23-37.73,129.64,129.64,0,0,0,0-88.58,111.32,111.32,0,0,0-23-37.73,114.72,114.72,0,0,0-36.5-26.25q-21.35-9.84-48.39-9.84t-48.4,9.84a114.38,114.38,0,0,0-36.5,26.25,111,111,0,0,0-23,37.73A127.76,127.76,0,0,0,133.81,454.78Z" transform="translate(-15.11 -7.05)" />
              <path className="cls-2 letter-e" d="M638.24,489.23q4.92,44.29,34.45,68.9t71.36,24.6q36.91,0,61.93-15.17a171.72,171.72,0,0,0,43.88-38.14l70.54,53.31q-34.46,42.66-77.1,60.7a227.37,227.37,0,0,1-89.41,18.05,236.35,236.35,0,0,1-83.66-14.77Q630.86,632,602.15,604.88t-45.52-65.21q-16.82-38.13-16.82-84.89t16.82-84.89q16.8-38.14,45.52-65.21t68.08-41.83a236.35,236.35,0,0,1,83.66-14.77q41,0,75.05,14.36a161,161,0,0,1,58.24,41.42q24.18,27.06,37.73,66.85t13.53,91.45v27.07ZM840,415.41q-.84-43.47-27.07-68.49t-73-25q-44.3,0-70.13,25.43t-31.58,68.08Z" transform="translate(-15.11 -7.05)" />
              <path className="cls-2 letter-b" d="M1018,31.55h98.42V308h2.46a140.14,140.14,0,0,1,18.87-20.1,150.78,150.78,0,0,1,27.89-19.27,169.57,169.57,0,0,1,37.73-14.76q21.32-5.73,49.21-5.75,41.84,0,77.1,16A180,180,0,0,1,1390,308q25,27.9,39,65.62t13.94,81.2q0,43.49-13.12,81.2T1391.2,601.6a181.75,181.75,0,0,1-61.52,43.88q-36.11,16-81.2,16-41.84,0-77.92-16.41t-57.42-52.49h-1.64v59H1018Zm326.44,423.23a128.21,128.21,0,0,0-7.79-44.29,111.32,111.32,0,0,0-23-37.73,114.72,114.72,0,0,0-36.5-26.25q-21.35-9.84-48.4-9.84t-48.39,9.84a114.27,114.27,0,0,0-36.5,26.25,110.88,110.88,0,0,0-23,37.73,129.8,129.8,0,0,0,0,88.58,110.69,110.69,0,0,0,23,37.73,114,114,0,0,0,36.5,26.25q21.31,9.84,48.39,9.84t48.4-9.84a114.41,114.41,0,0,0,36.5-26.25,111.13,111.13,0,0,0,23-37.73A128.13,128.13,0,0,0,1344.44,454.78Z" transform="translate(-15.11 -7.05)" />
            </svg>
          </div>

          <div className="contacts-container d-flex-center py-3">
            {/* <div className="mr-3 decafe-text font-weight-bold">Philadelphia, PA USA</div> */}
            {contacts.map((contact, index) => {
              return (
                <div key={index} className="mr-3">
                  <a href={contact.link} target="_blank">
                    <i className={`${contact.icon} hover-to-green`}></i>
                  </a>
                </div>
              )
            })}
          </div>

          {/* <div className="search" data-search-path="/app/pages/search">
            <Input
              name="searchKeyword"
              id="searchKeyword"
              placeholder={messages["menu.search"]}
              value={this.state.searchKeyword}
              onChange={e => this.handleSearchInputChange(e)}
              onKeyPress={e => this.handleSearchInputKeyPress(e)}
            />
            <span
              className="search-icon"
              onClick={e => this.handleSearchIconClick(e)}
            >
              <i className="simple-icon-magnifier" />
            </span>
          </div> */}
        </div>


        {/* ----------- CENTER ----------- */}



        {/* ----------- RIGHT SIDE ----------- */}


        <div className="navbar-right">
          {/* {isDarkSwitchActive && <TopnavDarkSwitch/>} */}
          <div className="header-icons d-inline-block align-middle">
            {/* <TopnavEasyAccess /> */}
            {/* <TopnavNotifications /> */}
            <button
              className="header-icon btn btn-empty d-none d-sm-inline-block"
              type="button"
              id="fullScreenButton"
              onClick={this.toggleFullScreen}
            >
              {this.state.isInFullScreen ? (
                <i className="simple-icon-size-actual d-block" />
              ) : (
                <i className="simple-icon-size-fullscreen d-block" />
              )}
            </button>
          </div>
          {/* <div className="d-inline-block mr-3">
            <UncontrolledDropdown className="">
              <DropdownToggle
                caret
                color="light"
                size="xs"
                className="language-button">
                <span className="name">{locale.toUpperCase()}</span>
              </DropdownToggle>
              <DropdownMenu className="mt-3" right>
                {localeOptions.map(l => {
                  return (
                    <DropdownItem
                      onClick={() => this.handleChangeLocale(l.id, l.direction)}
                      key={l.id}
                    >
                      {l.name}
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </UncontrolledDropdown>
          </div> */}
          {/* <div className="user d-inline-block">
            <UncontrolledDropdown className="dropdown-menu-right">
              <DropdownToggle className="p-0" color="empty">
                <span className="name mr-1">Sarah Kortney</span>
                <span>
                  <img alt="Profile" src="/assets/img/profile-pic-l.jpg" />
                </span>
              </DropdownToggle>
              <DropdownMenu className="mt-3" right>
                <DropdownItem>Account</DropdownItem>
                <DropdownItem>Features</DropdownItem>
                <DropdownItem>History</DropdownItem>
                <DropdownItem>Support</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => this.handleLogout()}>
                  Sign out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div> */}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ menu, settings }) => {
  const { containerClassnames, menuClickCount, selectedMenuHasSubItems } = menu;
  const { locale } = settings;
  return {
    containerClassnames,
    menuClickCount,
    selectedMenuHasSubItems,
    locale
  };
};
export default injectIntl(
  connect(
    mapStateToProps,
    { setContainerClassnames, clickOnMobileMenu, logoutUser, changeLocale }
  )(TopNav)
);
