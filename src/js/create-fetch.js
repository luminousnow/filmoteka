const KEY = "9fba788361f0940b39e64c54ec217196"
const DEFAULT_PAGE = 1
const BASE_URL = "https://api.themoviedb.org/3/"
const LANGUAGE = 'en-US'

export const createUrlForTrending = (page = DEFAULT_PAGE) => { // Создаёт ссылку на фильмы что в тренде (для формирования главной страници)
    return `${BASE_URL}trending/all/day?api_key=${KEY}&page=${page}&adult=false`
}

export const createUrlSearchByKeyword = (query, page = DEFAULT_PAGE) => { // Создаёт ссылку для поиска по ключевому слову
    return `${BASE_URL}search/movie?api_key=${KEY}&language=${LANGUAGE}&page=${page}&include_adult=false&query=${query}`
}

export const createUrlForFullInfo = (movie_id) => {  // Создаёт ссылку для поиска по Id
    return `${BASE_URL}movie/${movie_id}?api_key=${KEY}&language=${LANGUAGE}`
}


export function fetchMovie(url){ // Принимает как параметр одну из выше описаных ф-ций и вернёт промис с данными
    return fetch(url).then(response => response.json())
}