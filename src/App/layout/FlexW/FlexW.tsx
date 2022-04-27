import React, { ReactElement } from 'react';
import style from './FlexW.module.scss'

interface IFlexWProps {
    children: Array<ReactElement>|ReactElement|string
    style?:object
}

//React.FC<IFlexWProps> attribute à props les attributes de IFlexWProps
const FlexW: React.FC<IFlexWProps> = (props) => {
  return (
  <div className={style.FlexW} date-testid="FlexW" style={{...props.style}}> 
      {props.children}
    </div>
  )
}

export default FlexW;
