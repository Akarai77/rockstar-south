import React from 'react'
import useFetch from '../components/useFetch';
import Heading from '../components/Heading';
import "../styles/Cards.css";
import Card from '../components/Card';
import Footer from '../components/Footer';
import { useState } from 'react';

const Cards = () => {

    const {data:cards,isPending:pending2,error:err2} = useFetch("http://localhost:8000/cards");
    const [enlargedCardId, setEnlargedCardId] = useState(null);

  return (
    <div className={`cards-container up ${enlargedCardId ? 'enlarge' : ''}`}>
        <div className="heading">
            <Heading content={"The Legacy..........."}/>
        </div>
        <div className="cards">
            {
                cards &&
                cards.map((card)=>(
                    <Card 
                        key={card.id}
                        card={card} 
                        isEnlarged={enlargedCardId === card.id} 
                        setEnlargedCardId={setEnlargedCardId} 
                    />
                ))
            }
        </div>
        <Footer/>
    </div>
  )
}

export default Cards