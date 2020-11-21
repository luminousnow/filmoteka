import { refs } from './get-refs.js';
import { fetchMovie, createUrlForFullInfo } from './create-fetch';
import { renderMoviesListItem } from './get-markup';

export function createPropertyForNamesOfGenres (movieData, genres){
  const currentMovieAllGenres = [] // Сюда получу массив имён жанров
  movieData.genre_ids.map(id => { // беру id текущего фильма
    genres.map( genre => { // мапаю массив жанров полученых из localStorage (map работает пока есть жанры)
      if(genre.id === id){ // сравниваю id жанра из localStorage с id текущего фильма
        currentMovieAllGenres.push({
          id: genre.id,
          name: genre.name
        }) // получаю имя текущего жанра и пишу в массив имён жанров
      }
    })
  })
  return currentMovieAllGenres
}

export function renderWatchedOrQueue(movieIds) {
  refs.mainWrapper.innerHTML = '';
  if(movieIds){
    movieIds.split(' ').map(id => {
      fetchMovie(createUrlForFullInfo(id))
        .then(movieData => {
          console.log(movieData);
          refs.mainWrapper.insertAdjacentHTML(
            'beforeend',
            renderMoviesListItem(movieData),
          )
        })
    })
  }
}

export function createEventsForButtonsToWatchedToQueue(id) {
  // для тех кнопок что в модалке с полной инфой о фильме
  const wrapBtns = document.querySelector('.js-btns-add'); // обёртка кнопок
  const toWatched = wrapBtns.querySelector('.to-watched');
  const toQueue = wrapBtns.querySelector('.to-queue');

  toWatched.addEventListener('click', () =>
    addUnicIdToLocalStorage('toWatched', id),
  );
  toQueue.addEventListener('click', () =>
    addUnicIdToLocalStorage('toQueue', id),
  );
}

// по клику добавит только уникальные id в localStorage
function addUnicIdToLocalStorage(nameInStorage, id) {
  let IdFromStorage = localStorage.getItem(nameInStorage);
  IdFromStorage = isIdExistInLocalStorage(IdFromStorage, id);
  localStorage.setItem(nameInStorage, IdFromStorage);
}

function isIdExistInLocalStorage(fromStorage, currentId) {
  // проверка есть ли такой id в localStorage
  if (!fromStorage) {
    fromStorage = currentId;
  } else if (fromStorage.indexOf(currentId) < 0) {
    fromStorage += ` ${currentId}`;
  }
  return fromStorage;
}
