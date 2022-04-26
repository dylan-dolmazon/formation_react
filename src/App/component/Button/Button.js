import React from 'react';
import style from './Button.module.css'

const Button=(props)=>{
    console.log(props);
    return (
    <button 
        className={style.Button} 
        style={ {color:props.color, backgroundColor:props.bgColor} }>
        Dylan
    </button>)
}

export default Button;