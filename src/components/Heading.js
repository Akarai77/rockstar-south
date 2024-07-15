import React from 'react'
import { useEffect,useState,useRef } from "react";
import "../styles/Heading.css";

const Heading = ({content}) => {

    const [inView, setInView] = useState(false);
    const headingRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            });
        });

        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        return () => {
            if (headingRef.current) {
                observer.unobserve(headingRef.current);
            }
        };
    }, [headingRef]);

  return (
    <div className={`heading-1 ${inView ? 'in-view': ''}`} ref={headingRef}>
        <h1>{content}</h1>
    </div>
  )
}

export default Heading