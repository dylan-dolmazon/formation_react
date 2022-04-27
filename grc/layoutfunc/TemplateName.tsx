import React, { ReactElement } from 'react';
import style from './TemplateName.module.scss'

interface ITemplateNameProps {
    children: Array<ReactElement>|ReactElement|string
    style?:object
}

const TemplateName: React.FunctionComponent<ITemplateNameProps> = (props) => {
  return (
  <div className={style.TemplateName} date-testid="TemplateName" style={{...props.style}}> 
      {props.children}
    </div>
  )
}

export default TemplateName;
