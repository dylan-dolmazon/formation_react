import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

const Button = (props) => {
  const [isClicked, setClicked] = useState(false);
  const [isOver, setOver] = useState(false);
  useEffect(() => {
    console.log("updt du state", isClicked);
    if (isClicked) {
      setTimeout(() => {
        setClicked(false);
      }, 300);
    }
    // return ()=>{console.log('unmountbutton')}
  }, [isClicked]);
  let className = style.Button;
  if (isClicked) {
    className += ' ' + style.clicked;
  } else if (isOver) {
    className +=' ' + style["over"];
  }
  return (
    <button
      type={props.type}
      className={className}
      style={{ color: props.color, backgroundColor: props.bgColor }}
      onClick={(evt) => {
        // console.log(evt);
        setClicked(true);
        //if(undefined!==props.onButtonClicked && typeof props.onButtonClicked==='function')
        props.onButtonClicked()
      }}
      onMouseEnter={() => {setOver(true)}}
      onMouseLeave={() => {setOver(false)}}
    >
      {props.children}
    </button>
  );
};
Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
Button.defaultProps = {
  bgColor: "grey",
  color:'white',
  type:'button',
  onButtonClicked:()=>{}
};
export default Button;
