import React, { useEffect } from 'react'
import { FaPlay,FaPause, FaVolumeUp, FaVolumeDown, FaTimes } from 'react-icons/fa';
import { useState,useRef } from 'react';
import "../styles/player.css";

const Player = ({isPlaying,setIsPlaying,isPlayerActive,videoRef,progress}) => {

    useEffect(()=>{
        if(isPlayerActive){
            setIsMuted(false);
        } else {
            setIsMuted(true);
        }
    },[isPlayerActive])

    const [isMuted,setIsMuted] = useState(true);
    const [volume,setVolume] = useState(0.5);
    
    useEffect(()=>{
        videoRef.current.muted = isMuted;
        videoRef.current.volume = volume;
    },[isMuted,volume]);
    const progressBarRef = useRef(null);

    const seek = (e) => {
        const clickX = e.clientX - progressBarRef.current.getBoundingClientRect().left;
        const width = progressBarRef.current.clientWidth;
        const seekTime = (clickX / width) * videoRef.current.duration;
        videoRef.current.currentTime = seekTime;
        console.log(videoRef.current.volume)
    }

    const handleVideo = ()=>{
        if(videoRef.current.paused){
            setIsPlaying(true); 
            videoRef.current.play(); 
        } else {
            setIsPlaying(false);
            videoRef.current.pause();
        }
    }

    const handleVolume = (increase)=>{
        if (videoRef.current) {
            let newVolume = volume;
            if (increase) {
              newVolume = Math.min(volume + 0.1, 1);
              setIsMuted(false);
            } else {
              newVolume = Math.max(volume - 0.1, 0);
              if (newVolume === 0) {
                setIsMuted(true);
              }
            }
            setVolume(newVolume);
        }
    };

    

  return (
    <div className={`player-container`}>
        {
            isPlayerActive && <div className='player'>
                <div className="row">
                    <div className="play-pause">
                        {!isPlaying ? <FaPlay className='pp-btn' onClick={()=>handleVideo()}/> : <FaPause className='pp-btn' onClick={()=>handleVideo()}/>}
                    </div>
                    <div className="volume">
                        <FaVolumeUp className={`vol-btn ${volume === 1 ? 'green' : ''}`} onClick={()=>handleVolume(true)}/>
                        <FaVolumeDown className={`vol-btn ${isMuted ? 'red' : ''}`} onClick={()=>handleVolume(false)}/>
                    </div>
                </div>
                <div className="progress-bar"
                     ref={progressBarRef} 
                     onClick={seek}   
                >
                    <div className="progress" style={{width: `${progress}%`}}></div>
                </div>
            </div>
        }
    </div>
  )
}

export default Player