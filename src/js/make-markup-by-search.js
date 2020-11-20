import filmsTmpl from '../tamplates/search-films.hbs';

import FilmsApiService from '../js/films-service';
const refs = {
  searchForm: document.querySelector('.js-search-form'),
  filmContainer: document.querySelector('.js-main-content'),
  errorMsg: document.querySelector('.error-js'),
};

const filmsApiService = new FilmsApiService();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  refs.errorMsg.classList.add('error-hidden');
  filmsApiService.query = e.currentTarget.elements.query.value;

  if (filmsApiService.query === '') {
    refs.errorMsg.classList.remove('error-hidden');
    return;
  }
  filmsApiService.resetPage();
  filmsApiService.fetchFilms().then(result => {
    clearFilmsContainer();
    appendFilmsMarkup(result);
  });
}

function appendFilmsMarkup(results) {
  refs.filmContainer.insertAdjacentHTML('beforeend', filmsTmpl(results));
}

function clearFilmsContainer() {
  refs.filmContainer.innerHTML = '';
}
