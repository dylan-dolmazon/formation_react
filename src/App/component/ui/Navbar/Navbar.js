import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './Navbar'

const navbarInitialState={}

const Navbar = (props) => {
    const [state, setstate] = useState(navbarInitialState)
    useEffect(() => {
      
    }, [state])
  return (
    <div className={style.Navbar} data-testid="Navbar">navbar</div>
  )
}

Navbar.propTypes = {}
Navbar.defaultProps={}
export default Navbar