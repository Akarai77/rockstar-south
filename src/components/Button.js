import React from 'react'
import "../styles/Button.css"
import { Link } from 'react-router-dom'

const Button = ({content,to}) => {
  return (
    <div className='Button'>
        <Link to={to}>
          <button className="btn">{content}</button>
        </Link>
    </div>
  )
}

export default Button