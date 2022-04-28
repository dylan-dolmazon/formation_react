import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Header.js";
export const headerInitialState = {};
const Header = (props) => {
  const [state, setstate] = useState(headerInitialState);
  useEffect(() => {
    
  }, [state])
  return (
    <div className={style.Header} data-testid="Header">
      header
    </div>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
