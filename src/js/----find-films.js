// import { refs } from './get-refs.js';

// import { renderModalContent, renderMoviesListItem } from './render-markup';

// import {
//   fetchMovie,
//   createUrlForTrending,
//   createUrlForFullInfo,
// } from './create-fetch';

// import { createEventsForButtonsToWatchedToQueue } from './api-servis';

// export function renderAllOnStartPage() {
//   // точка входа
//   fetchMovie(createUrlForTrending()).then(data => {
//     const films = data.results;

//     films.map(movieData =>
//       refs.mainWrapper.insertAdjacentHTML(
//         'beforeend',
//         renderMoviesListItem(movieData),
//       ),
//     );

//     refs.mainWrapper.addEventListener('click', event => {
//       refs.modal.classList.remove('hide');
//       const id = event.target.dataset.id;
//       if (id) {
//         renderFullInfo(+id);
//       }
//     });
//   });
// }

// function renderFullInfo(id) {
//   fetchMovie(createUrlForFullInfo(id))
//     .then(data => {
//       refs.modal.innerHTML = renderModalContent(data); // тут передаю полученую дату в модалку полной инфи о фильме
//       const close = document.querySelector('.js-close');
//       close.addEventListener('click', () => {
//         refs.modal.classList.add('hide');
//       });
//       data = null;
//       return id;
//     })
//     .then(id => {
//       createEventsForButtonsToWatchedToQueue(id); // для тех кнопок что в модалке с полной инфой о фильме чтоб id фильма записать в localstorage
//     })
//     .catch(e => {
//       console.log(e);
//     });
// }
