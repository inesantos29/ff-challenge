import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const Header = ({ total }) => (
  <header className="header">
    <h1 className="title">My Bag</h1>
    <h4 className="price">
      Total: {"€ " + total}
      {/*total.toLocaleString(undefined, { style: "currency", currency: "EUR" })*/}
    </h4>
  </header>
);

Header.propTypes = {
  total: PropTypes.number
};

export default Header;
