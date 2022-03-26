const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1014a819f9aef745ec25e4d9501f00bc&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=1014a819f9aef745ec25e4d9501f00bc&query="'

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
}