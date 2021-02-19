import React, {useEffect, useState} from 'react';
import Template from "../Template";
import './Gallery.scss'


const Gallery = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
    fetch('http://localhost:3000/photos')
        .then((response) => response.json())
        .then((photos) => {setPhotos(photos)}).catch(err => console.log(err));
    }, []);

    return (
        <Template>
            <div className="photos_parent_div">
                    <div className="photos_div">
                        {photos.map((photo) => <img key={photo.id} className="photos" src={photo.url} alt={"obrazek"}/>)}
                    </div>
            </div>

        </Template>
    )
}
export default Gallery