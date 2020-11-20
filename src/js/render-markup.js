import movieTpl from '../tamplates/cards.hbs';
import modalTpl from '../tamplates/card.hbs';

export function renderMoviesListItem(data) {
  return movieTpl(data);
} // додано рендер cards.hbs

export function renderModalContent(data) {
  return modalTpl(data);
} // додано рендер модалки card.hbs

// export function renderMoviesListItem(data){
//     return `
//         <li class="js-films-wrapper-list__item" data-id="${data.id}">
//             <img width="100px" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" data-id="${data.id}"/>
//             <p data-id="${data.id}">${data.title || data.name}</p>
//         </li>
//     `
// }

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
