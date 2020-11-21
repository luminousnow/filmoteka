import { refs } from './get-refs.js';
import {
  fetchMovie,
  createUrlForTrending,
  createUrlForFullInfo,
} from './create-fetch';
import { createEventsForButtonsToWatchedToQueue } from './api-servis';

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

export function renderAllOnStartPage() {
  // точка входа
  fetchMovie(createUrlForTrending()).then(data => {
    const films = data.results;

    films.map(movieData =>
      refs.mainWrapper.insertAdjacentHTML(
        'beforeend',
        renderMoviesListItem(movieData),
      ),
    );

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
  fetchMovie(createUrlForFullInfo(id))
    .then(data => {
      refs.modal.innerHTML = renderModalContent(data); // тут передаю полученую дату в модалку полной инфи о фильме
      const close = document.querySelector('.js-close');
      close.addEventListener('click', () => {
        refs.modal.classList.add('hide');
      });
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
