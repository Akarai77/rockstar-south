import React from 'react'
import useFetch from '../components/useFetch';
import Heading from '../components/Heading';
import Card2 from '../components/Card2';
import "../styles/games.css";
import Footer from '../components/Footer';

const Games = () => {

    const {data:seriesList,isPending:pending3,error:err3} = useFetch("http://localhost:8000/seriesList");

  return (
    <div className='games-container up'>
        <div className="heading">
            <Heading content={"Here We Gooooo........."}/>
        </div>
        <div className="games">
            {
                seriesList &&
                seriesList.map((series,index)=>(
                    <Card2 obj={series} reverse={(index+1)%2 === 0} link={`GameInfo/`}/>
                ))
            }
        </div>
        <Footer/>
    </div>
  )
}

export default Games