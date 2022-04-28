import React from "react";
import style from "./FlexH.module.scss";
interface IFlexHProps {
    children:Array<React.ReactElement>|React.ReactElement|string
    style?:object
}

const FlexH: React.FC<IFlexHProps> = (props) => {
  return (
    <div className={style.FlexH} data-testid="FlexH" style={{...props.style}}>
      {props.children}
    </div>
  );
};

export default FlexH;
