import { refs } from './get-refs.js';
import { fetchMovie, createUrlForFullInfo } from './create-fetch';
import { renderMoviesListItem } from './get-markup';

export function renderWatchedOrQueue(movieIds) {
  refs.mainWrapper.innerHTML = '';
  movieIds.split(' ').map(id => {
    fetchMovie(createUrlForFullInfo(id)).then(movieData => {
      refs.mainWrapper.insertAdjacentHTML(
        'beforeend',
        renderMoviesListItem(movieData),
      );
    });
  });
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

function addUnicIdToLocalStorage(nameInStorage, id) {
  // по клику добавит только уникальные id в localStorage
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
