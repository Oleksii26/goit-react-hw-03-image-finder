import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ options }) => {
    
     return options.map((option, i) => <div className={css.gallery} key={option + i}><img  className='' src={option.img} alt={option.name} width='170'/></div>)
}  
