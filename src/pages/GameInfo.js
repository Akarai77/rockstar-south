import React from 'react'
import Heading from '../components/Heading'
import "../styles/gameinfo.css";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const GameInfo = ({gameList,gameDetails}) => {

    const {gameName} = useParams();
    console.log(gameName)


  return (
    <div className='game-info-container up'>
        {
            gameList && <div className="game-list">
                <div className="h1">
                    <Heading content={"All Games :"}/>
                </div>
                <div>
                    {
                        gameList.map((series)=>(
                            <div className="game">
                                <h2>{series.title}</h2>
                                    <ol className='list'>
                                        {
                                            series.games.map((game)=>(
                                                <Link to={`./${game.replace(/\s+/g, '')}`}><li>{game}</li></Link>
                                            ))
                                        }
                                    </ol>
                            </div>
                        ))
                    }
                </div>
            </div>
        }
        {
            gameDetails && 
            <div className="game-info">
                <div className="h1">
                    <Heading content={gameDetails.title}/>
                </div>
                <div className="genre">
                    <h2>Genre: </h2>
                    <p>{gameDetails.genre}</p>
                </div>

                <div className="releaseDates">
                    <h2>Release Dates: </h2>
                    {
                        gameDetails.releaseDates.map((date)=>(
                            <p>{date}</p>
                        ))
                    }
                </div>

                {
                    gameDetails.body.map((body)=>(
                        <div className="body">
                            <h2>
                                {body.heading}
                            </h2>
                            <div className="content">
                            {
                                body.content.map((subContent)=>(
                                    <div className="subContent">
                                        <h3>{subContent.subHeading}</h3>
                                        <p>{subContent.paragraph}</p>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    ))
                }
            </div>
        }
        <Footer/>
    </div>
  )
}

export default GameInfo