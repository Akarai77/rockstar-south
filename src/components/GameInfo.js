import React from 'react'
import Heading from './Heading'
import "../styles/gameinfo.css";
import Footer from './Footer';

const GameInfo = ({gameDetails}) => {

    const title="gay";
    const content = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe eos hic, sapiente iusto, libero nihil sequi animi veritatis repudiandae consectetur molestiae cupiditate maxime quae et corporis vitae. Fuga, iure dolores.";


  return (
    <div className='game-list-container up'>
        <div className="heading">
            <Heading content={title}/>
        </div>
        <div className="content">
            {content}
        </div>
        <div className="footer">
            <Footer/>
        </div>
    </div>
  )
}

export default GameInfo