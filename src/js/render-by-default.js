import DefaultFilms from '../js/films-service';

import tmpl from '../tamplates/search-films.hbs';

const refs = {
  defaultContainer: document.querySelector('.js-main-content'),
};

const defaultsFilmsApi = new DefaultFilms();

defaultsFilmsApi.fetchDefaultFilms().then(result => {
  makuDefaultMarkup(result);
});

function makuDefaultMarkup(results) {
  refs.defaultContainer.insertAdjacentHTML('beforeend', tmpl(results));
}
