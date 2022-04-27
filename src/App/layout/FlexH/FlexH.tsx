import React, { ReactElement } from 'react';
import style from './FlexH.module.scss'

interface IFlexHProps {
    children: Array<ReactElement>|ReactElement|string
    style?:object
}

//React.FC<IFlexHProps> attribute à props les attributes de IFlexHProps
const FlexH: React.FC<IFlexHProps> = (props) => {
  return (
  <div className={style.FlexH} date-testid="FlexH" style={{...props.style}}> 
      {props.children}
    </div>
  )
}

export default FlexH;
