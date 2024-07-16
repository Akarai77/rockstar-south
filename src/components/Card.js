import {useState,useRef,useEffect} from 'react';
import Player from '../components/Player';
import { FaTimes } from 'react-icons/fa';
import '../styles/Card.css';

const Card = ({card,isEnlarged,setEnlargedCardId}) => {
    const [isTextActive,setIsTextActive] = useState(false);
    const [isVideoActive,setIsVideoActive] = useState(false);
    const [isPlaying,setIsPlaying] = useState(true);
    const [isShrinking,setIsShrinking] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (isEnlarged) {
          document.querySelector('.card.enlarge').focus();
        }
      }, [isEnlarged]);
 
    const handleKeyPress = (e) =>{
        if(e.keyCode===32){
            if(videoRef.current.paused){
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause(); 
                setIsPlaying(false);
            }
        }
    }

    const handleEnlarge = () => {
        setEnlargedCardId(isEnlarged ? null : card.id);
        videoRef.current.play();
    };

    const [progress, setProgress] = useState(0);
    const updateProgressBar = () => {
         const currentTime = videoRef.current.currentTime;
         const duration = videoRef.current.duration;
         const progressPercentage = (currentTime/duration)*100;
         setProgress(progressPercentage);
    };

    return ( 
        <div  
            onMouseEnter={()=>{if(!isEnlarged)videoRef.current.play()}} 
            onMouseLeave={()=>{if(!isEnlarged)videoRef.current.pause()}}  
            className={`card ${isEnlarged ? 'enlarge' : ''} ${isShrinking ? 'shrink' : ''}`}
            tabIndex={0}
            onKeyDown={handleKeyPress}
            >
            {
                isEnlarged && <div className="exit">
                    <FaTimes onClick={()=>{setEnlargedCardId(null); videoRef.current.pause(); setIsShrinking(true); setTimeout(()=>setIsShrinking(false),1000);}}/>
                </div>
            }
            <video className={`game-bgvideo ${isVideoActive ? 'clicked':''}`} muted loop ref={videoRef} onTimeUpdate={updateProgressBar}>
                <source src={require(`../${card.video}`)} type="video/mp4"/>
            </video>
            <h2>{ card.title }</h2>
            <p className={`${isTextActive ? 'clicked':''}`}>{ card.content }</p>
            <div className="buttons">
                <button className={`${isTextActive ? 'clicked':''}`} onClick={()=>setIsTextActive(!isTextActive)}>{isTextActive ? "Show Text" : "Hide Text"}</button>
                <button className={`${isVideoActive ? 'clicked':''}`} onClick={()=>setIsVideoActive(!isVideoActive)}>{isVideoActive ? "Show Video" : "Hide Video"}</button>
                <button className={`${isEnlarged ? 'clicked':''}`} id="enlarge" onClick={()=>{setIsVideoActive(false);setIsTextActive(false);handleEnlarge();}}>Enlarge</button>
            </div>
            <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} isPlayerActive={isEnlarged} videoRef={videoRef} progress={progress}/>
        </div>
     );
}


export default Card;