import { useEffect, useState, useRef } from "react";
import {FaChevronDown} from "react-icons/fa";
import '../styles/Card2.css';
import { Link } from "react-router-dom";

const Card2 = ({ obj,reverse,link }) => {

    const heightRef = useRef(0); 
    console.log(link)
    useEffect(()=>{
        if(isActive){
            const items=heightRef.current.getElementsByClassName("dropdown-item");
            heightRef.current.style.height=((items.length)*36).toString()+"px";
        } else {
            heightRef.current.style.height="0px";
        }
    })

    const [isActive,setIsActive] = useState(false);

    return ( 
        <div className={`game-card ${isActive ? "open" : ""}`}>
            <div className={`first-row ${reverse ? "reverse" : ""}`}>
                <div className="img">
                    <img src={require(`../${obj.img}`)} alt={obj.title} />
                </div>
                <div className="info">
                    <p className="content">
                        {obj.quote}
                    </p>
                    <p className="author">
                        {`-${obj.author}`}
                    </p>
                </div>
            </div>
            <div className={`dropdown-btn ${isActive ? "open":""}`} onClick={()=> {setIsActive(!isActive)}} >
                <h1>{ obj.title }</h1>
                <FaChevronDown className={`arrow ${isActive ? 'rotate' : ''}`}/>
            </div>
            <div className={`dropdown-content ${isActive ? "open":""}`} ref={heightRef}>
                {
                    obj.games.map((game,id)=>(
                       <Link to={`${link}${game.replace(/\s+/g, '')}`}>
                             <div className="dropdown-item" key={id}>
                                <p>{ game }</p>
                            </div>
                       </Link>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Card2;