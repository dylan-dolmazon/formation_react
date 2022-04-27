import React, { useEffect, useState } from 'react';
import style from './Button.module.css'
import PropTypes from 'prop-types';

const Button=(props)=>{
     const [isClicked, setClicked] = useState(false)
     const [isHover, setHover] = useState(false)
     useEffect(() => {
        console.log("update du state",isClicked)
        if(isClicked){
            setTimeout(()=>{
              setClicked(false)
            },1000)
        }
     }, [isClicked])
     let className=style.Button
     if(isClicked){
         className+=' '+style.clicked
     }else if(isHover){
         className += ' '+style.hover
     }
    return (
    <button 
        type={props.type}
        ///className={`${style.Button}${isHover?' '+style.hover:''}${isClicked?' '+style.clicked:''}`} 
        className={className}
        style={ {color:props.color, backgroundColor:props.bgColor}}
        onClick={(evt)=>{
            // eslint-disable-next-line no-const-assign
            setClicked(true)
            console.log("value de isClicked",isClicked)
            props.onButtonClick()
        }}
        onMouseEnter={()=>{setHover(true)}}
        onMouseLeave={()=>{setHover(false)}}
        >
        {props.children}
        <br/>
        {isClicked.toString()}
        
    </button>)
}
Button.propTypes={
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onButtonClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
}

Button.defaultProps={
    bgColor:'orange',
    color:'grey',
    onButtonClick: ()=>{}
}

export default Button