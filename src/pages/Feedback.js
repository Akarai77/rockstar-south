import React from 'react'
import Heading from '../components/Heading'
import "../styles/feedback.css";

const Feedback = () => {
  return (
    <div>
        <div style={{margin:"3rem 0 3rem 2rem"}}>
            <Heading content={"Feedback"}/>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="feedback">Feedback:</label>
                    <textarea name="feedback" id='text' rows={10}></textarea>
                </div>
                <input id='submit' type="submit" />
            </form>
        </div>
    </div>
  )
}

export default Feedback