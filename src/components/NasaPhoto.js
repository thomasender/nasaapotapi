import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const apiKey = process.env.REACT_APP_NASA_KEY;


export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);
    
    useEffect(() => {
        fetchPhoto();
        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
                );
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    }, []);

    if (!photoData) return <div />;

    return(
        <>
            <Navbar />
            <div className="nasa-photo">  
                {photoData.media_type === 'image' ? (
                 
                    <img src={photoData.url} alt={photoData.title} />
                   
                ) : (
                    <iframe 
                    title="space-video"
                    src={photoData.url}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="photo"
                    />
                )}
                <div>
                    <h1 className="nasa-photo title">{photoData.title}</h1>
                    <p className="nasa-photo explanation">{photoData.date}<br />{photoData.explanation}</p>
                </div>
            </div>
        </>

    )
}