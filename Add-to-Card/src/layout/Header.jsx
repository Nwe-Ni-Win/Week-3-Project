import React from "react";
import Nav from "../components/Nav";
import Summary from "../components/summary";

const Header = (props) => {
  return (
    <>
      <Nav showCartHandler={props.showCartHandler} />
      <Summary />
    </>
  );
};

export default Header;
