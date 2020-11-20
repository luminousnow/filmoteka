const API_KEY = '9fba788361f0940b39e64c54ec217196';
const BASE_URL = 'https://api.themoviedb.org';

export default class FilmsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchFilms() {
    const url = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${this.searchQuery}&page=${this.page}&&include_adult=false`;

    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        this.incrementPage();
        return results;
      });
  }

  fetchDefaultFilms() {
    const url = `${BASE_URL}/3/trending/movie/day?api_key=9fba788361f0940b39e64c54ec217196`;
    return fetch(url)
      .then(response => response.json())
      .then(({ results }) => {
        return results;
      });
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
