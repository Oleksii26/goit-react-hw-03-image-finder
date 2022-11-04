import axios from 'axios'

export const fetchArticles = (query, page) => {
    const url = 'https://pixabay.com/api/'
    const key = '30141749-fb2f341407d461fabdd51ea4f'
    const filter =`?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
 return axios.get(`${url}${filter}`)
}
