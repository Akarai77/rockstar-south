import React from 'react'
import "../styles/Error.css";

const Error = ({error_msg}) => {
  return (
    <div className='error'>
        {error_msg}
    </div>
  )
}

export default Error