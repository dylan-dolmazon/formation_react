import React from "react";
import style from "./FlexW.module.scss";
interface IFlexWProps {
    children:Array<React.ReactElement>|React.ReactElement|string
    style?:object
}

const FlexW: React.FC<IFlexWProps> = (props) => {
  return (
    <div className={style.FlexW} data-testid="FlexW" style={{...props.style}}>
      {props.children}
    </div>
  );
};

export default FlexW;
