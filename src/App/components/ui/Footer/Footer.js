import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Footer.js";
export const footerInitialState = {};
const Footer = (props) => {
  const [state, setstate] = useState(footerInitialState);
  useEffect(() => {
    
  }, [state])
  return (
    <div className={style.Footer} data-testid="Footer">
      footer
    </div>
  );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
