import { refs } from './get-refs.js';
import {
  fetchMovie,
  createUrlForTrending,
  createUrlForFullInfo,
  getGenresFromBack,
} from './create-fetch';

import {renderStartPagePagination} from './pagination'

import {
  createEventsForButtonsToWatchedToQueue,
  createPropertyForNamesOfGenres,
  renderFullInfoInModal
} from './api-servis';

import movieTpl from '../tamplates/cards.hbs';
import modalTpl from '../tamplates/card.hbs';

// рендер колекції карток фільмів
export function renderMoviesListItem(data) {
<<<<<<< Updated upstream
  data.release_date = data.release_date.slice(0, 4); // повертає формат дати в рік з чотирьох чисел"2000"
  return movieTpl(data);
}
=======
  data.release_date = data.release_date.slice(0, 4)
  return movieTpl(data);
}

>>>>>>> Stashed changes

// рендер однієї картки фільму для модалки
export function renderModalContent(data) {
  return modalTpl(data);
}

const loader = document.querySelector('.loader-ellips');

export function renderAllOnStartPage() {
  // точка входа

  fetchMovie(getGenresFromBack())
    // Получаю все жанры с бека и записую в localStorage
    .then(objGenres => {
      localStorage.setItem('genres', JSON.stringify(objGenres.genres));
    });

  fetchMovie(createUrlForTrending()).then(data => {

    
    let allResults = data.results
    let resultsForRender = []
    for(let i = 0; i < 9; i += 1){
      resultsForRender.push(data.results[i])
    }

    console.log(resultsForRender);
    // console.log(data);

    const films = resultsForRender;
    const genres = JSON.parse(localStorage.getItem('genres')); // получаю жанры из localStorage и парсю

    films.map(movieData => {
      //в movieData каждый отдельный фильм
      movieData.genres = createPropertyForNamesOfGenres(movieData, genres);
      return refs.mainWrapper.insertAdjacentHTML(
        'beforeend',
        renderMoviesListItem(movieData),
      );
    });
    renderFullInfoInModal(refs)
    renderStartPagePagination(data)
  });
}

export function renderFullInfo(id) {
  loader.classList.remove('is-hidden');
  fetchMovie(createUrlForFullInfo(id))
    .then(data => {
      refs.modal.innerHTML = renderModalContent(data); // тут передаю полученую дату в модалку полной инфи о фильме
      refs.modal.classList.add('is-open');
      loader.classList.add('is-hidden');
      const close = document.querySelector('.js-close');
      close.addEventListener('click', onClose); // замінила refs.modal.classList.add('hide') на зміну onClose;
      window.addEventListener('keydown', onEscKeyPress); // додано закриття модалки по натисканню на ESC;
      refs.modal.addEventListener('click', onCloseOverlay); // додано закриття модалки по натисканню на Overlay;
      function onClose(e) {
        e.currentTarget.removeEventListener('keydown', onEscKeyPress);
        e.currentTarget.removeEventListener('click', onCloseOverlay);
        refs.modal.classList.add('hide');
        refs.modal.classList.remove('is-open');
      }

      function onEscKeyPress(e) {
        if (e.code === 'Escape') {
          onClose(e);
        }
      }

      function onCloseOverlay(e) {
        if (e.currentTarget === e.target) {
          onClose(e);
        }
      }

      data = null;
      return id;
    })
    .then(id => {
      createEventsForButtonsToWatchedToQueue(id); // для тех кнопок что в модалке с полной инфой о фильме чтоб id фильма записать в localstorage
    })
    .catch(e => {
      console.log(e);
    });
}