import React from "react";
import PropTypes from "prop-types";
import style from "./MemeSvgViewer.js";
export const memeSvgViewerInitialState = {};
const MemeSvgViewer = (props) => {

  return (
    <svg className={style.MemeSvgViewer} data-testid="MemeSvgViewer" viewBox={`0 0 ${props.image?props.image.w:1000} ${props.image?props.image.h:1000}`}>
      {props.image&&<image href={`/img/${props.image.url}`} x={0} y={0} />}
      <text 
      x={props.meme.x} y={props.meme.y} 
      fontSize={props.meme.fontSize} 
      fontWeight={props.meme.fontWeight} 
      fill={props.meme.color} 
      textDecoration={props.meme.underline?'underline':'none'} 
      fontStyle={props.meme.italic?'italic':'normal'}
      >{props.meme.text}</text>
    </svg>
  );
};

MemeSvgViewer.propTypes = {
  image: PropTypes.object,
  meme: PropTypes.object.isRequired
};


export default MemeSvgViewer;
