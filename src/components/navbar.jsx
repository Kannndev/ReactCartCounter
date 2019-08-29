import React, { Component } from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        Count
      </a>
      <span className="badge badge-pill badge-primary">{props.totalCount}</span>
      <span className="badge badge-pill badge-primary">
        {props.match && props.match.params && props.match.params.count
          ? props.match.params.count
          : 110}
      </span>
    </nav>
  );
};

export default NavBar;
