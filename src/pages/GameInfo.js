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
                <div className="heading">
                    <Heading content={"All Games :"}/>
                </div>
                <div>
                    {
                        gameList.map((games)=>(
                            <div className="game">
                                <h2>{games.game}</h2>
                                    <ol className='list'>
                                        {
                                            games.gameInfo.map((game)=>{
                                                const gameName = game.title.replace(/\s+/g, '');
                                                return(
                                                    <Link to={`./${gameName.trim()}`}><li>{game.title}</li></Link>
                                                )
                                            })
                                        }
                                    </ol>
                            </div>
                        ))
                    }
                </div>
            </div>
        }
        {
            gameDetails && <div className="game-info">
                <div>
                    
                </div>
            </div>
        }
        <Footer/>
    </div>
  )
}

export default GameInfo