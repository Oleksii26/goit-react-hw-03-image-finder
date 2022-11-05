import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import css from './ImageGallery.module.css'
import React from 'react'


export const ImageGallery = ({ images }) => {
    return <ul className={css.gallery}>
        {images.map(image => <ImageGalleryItem key={image.id}
         webformatURL={image.webformatURL}
         largeImageURL={image.largeImageURL} />)}
    </ul>
}


