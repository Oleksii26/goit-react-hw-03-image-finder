import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ largeImageURL, webformatURL }) => {
    return <li className={css.item}>
        <img src={webformatURL} alt={webformatURL} width='300' height='200' />
    </li>
}  
