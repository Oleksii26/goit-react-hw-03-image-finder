import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import css from './ImageGallery.module.css'
import { fetchArticles } from 'components/Api/ArticlesApli'
import React from 'react'

const posts = [
    { name: 'John', age: 35, img: 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2022/10/AP22285511632451.jpg' },
    { name: 'John', age: 35, img: 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2022/10/AP22285511632451.jpg' },
    { name: 'John', age: 35, img: 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2022/10/AP22285511632451.jpg' },
    { name: 'John', age: 35, img: 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2022/10/AP22285511632451.jpg' },
    { name: 'John', age: 35, img: 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2022/10/AP22285511632451.jpg' },
    { name: 'John', age: 35, img: 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2022/10/AP22285511632451.jpg' },
    { name: 'John', age: 35, img: 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2022/10/AP22285511632451.jpg' },
    { name: 'John', age: 35, img: 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2022/10/AP22285511632451.jpg' },
    { name: 'John', age: 35, img: 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2022/10/AP22285511632451.jpg' },
    { name: 'John', age: 35, img: 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2022/10/AP22285511632451.jpg' },
    { name: 'John', age: 35, img: 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2022/10/AP22285511632451.jpg' },
    { name: 'John', age: 35, img: 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2022/10/AP22285511632451.jpg' },
    { name: 'John', age: 35, img: 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2022/10/AP22285511632451.jpg' },
    { name: 'John', age: 35, img: 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2022/10/AP22285511632451.jpg' },
    { name: 'John', age: 35, img: 'https://s3media.freemalaysiatoday.com/wp-content/uploads/2022/10/AP22285511632451.jpg' },

]

export class ImageGallery extends React.Component {
    state = {
        post: [],
        query: '',
        article: [],
    }


    componentDidMount() {
        fetchArticles('cat').then(console.log())
        
    }
    async searchArticles() {
        const { query } = this.state
        try {
            const { data } = await fetchArticles(query)
            console.log(data)
        } catch (error) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {  query } = this.state
        if (query !== prevState.query) {
            this.searchArticles()
        }
    }

    render() {
        return <div className={css.gallery}>
            <ImageGalleryItem options={posts} />
        </div>
    }
}