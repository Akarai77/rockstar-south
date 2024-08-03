import React, { useEffect, useState } from 'react';
import useFetch from '../components/useFetch';
import "../styles/gallery.css";
import Footer from '../components/Footer';

const Gallery = () => {
    // Fetch gallery images and videos
    const { data: galleryImages, isPending1, err1 } = useFetch("http://localhost:8000/galleryImages");
    const { data: galleryVideos, isPending2, err2 } = useFetch("http://localhost:8000/galleryVideos");

    // State to handle shuffled images and current gallery view
    const [shuffledGallery, setShuffledGallery] = useState([]);
    const [isGallery, setGallery] = useState('images');

    // Shuffle images when they are fetched
    useEffect(() => {
        if (galleryImages) {
            const shuffled = [...galleryImages];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            setShuffledGallery(shuffled);
        }
    }, [galleryImages]);

    return (
        <div className='gallery-container'>
            <div className="nav">
                <p className={`${isGallery === 'images' ? 'img-active' : ''}`} onClick={() => setGallery('images')}>Images</p>
                <p className={`${isGallery === 'videos' ? 'vid-active' : ''}`} onClick={() => setGallery('videos')}>Videos</p>
            </div>

            <div className="gallery">
                <div className={`${isGallery === "images" ? "images" : 'shrink-image'}`}>
                    {
                        shuffledGallery && 
                        shuffledGallery.map((img) => (
                            <img key={img.id} src={require(`../${img.path}`)} alt={img.id} />
                        ))
                    }
                </div>

                <div className={`${isGallery === "videos" ? 'videos' : 'shrink-video'}`}>
                    {
                        galleryVideos &&
                        galleryVideos.map((vid) => (
                            <video key={vid.id} autoPlay muted loop>
                                <source src={require(`../${vid.path}`)} />
                            </video>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Gallery;
