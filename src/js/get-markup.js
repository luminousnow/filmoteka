import { refs } from './get-refs.js';
import {
  fetchMovie,
  createUrlForTrending,
  createUrlForFullInfo,
  getGenresFromBack,
} from './create-fetch';

import {
  createEventsForButtonsToWatchedToQueue,
  createPropertyForNamesOfGenres,
} from './api-servis';

import movieTpl from '../tamplates/cards.hbs';
import modalTpl from '../tamplates/card.hbs';

// рендер колекції карток фільмів
export function renderMoviesListItem(data) {
  return movieTpl(data);
}
// export function renderMoviesListItem(data){
//     return `
//         <li class="js-films-wrapper-list__item" data-id="${data.id}">
//             <img width="100px" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" data-id="${data.id}"/>
//             <p data-id="${data.id}">${data.title || data.name}</p>
//         </li>
//     `
// }

// рендер однієї картки фільму для модалки
export function renderModalContent(data) {
  return modalTpl(data);
}
// export function renderModalContent(data) {
//   // тут описана тестовая модалка, все данные приходят норм

//   function renderGenres(data) {
//     return `<span>${data.genres.map(genre => genre.name).join(', ')}</span>`;
//   }

//   return `
//         <div>
//             <img width='300' src="https://image.tmdb.org/t/p/w500/${
//               data.poster_path
//             }"/>
//         </div>
//         <div>
//             <h3>${data.name || data.title}</h3>
//             <p>vote / votes ----- ${data.vote_average} / ${data.vote_count}</p>
//             <p>Popularity ${data.popularity}</p>
//             <p>Original title: ${data.original_title || data.original_name}</p>
//             <p>Genre: ${renderGenres(data)}</p>
//             <h4>About</h4>
//             <p>${data.overview}</p>
//             <div class="js-btns-add">
//                 <button class="to-watched">Add to watched</button>
//                 <button class="to-queue">Add to queue</button>
//                 <button class='js-close'>Close</button>
//             </div>
//         </div>
//     `;
// }
const loader = document.querySelector('.loader-ellips');

export function renderAllOnStartPage() {
  // точка входа

  fetchMovie(getGenresFromBack())
    // Получаю все жанры с бека и записую в localStorage
    .then(objGenres => {
      localStorage.setItem('genres', JSON.stringify(objGenres.genres));
    });

  fetchMovie(createUrlForTrending()).then(data => {
    const films = data.results;
    const genres = JSON.parse(localStorage.getItem('genres')); // получаю жанры из localStorage и парсю

    films.map(movieData => {
      //в movieData каждый отдельный фильм
      movieData.genres = createPropertyForNamesOfGenres(movieData, genres);
      return refs.mainWrapper.insertAdjacentHTML(
        'beforeend',
        renderMoviesListItem(movieData),
      );
    });

    refs.mainWrapper.addEventListener('click', event => {
      refs.modal.classList.remove('hide');
      const id = event.target.dataset.id;
      if (id) {
        renderFullInfo(+id);
      }
    });
  });
}

function renderFullInfo(id) {
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
