import React from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">
        Navbar{" "}
        <span className="badge badge-pill badge-light m-2">{props.count}</span>
      </span>
    </nav>
  );
};

export default NavBar;
