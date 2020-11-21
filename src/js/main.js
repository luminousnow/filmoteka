import { refs } from './get-refs.js';
import { renderAllOnStartPage } from './find-films';
import { renderWatchedOrQueue } from './api-servis';

renderAllOnStartPage(); // по сути это точка входа

refs.addedToWatched.addEventListener('click', event => {
  // кнопка в хедере выводит просмотренные фильмы
  refs.modal.classList.add('hide');
  const movieIds = localStorage.getItem('toWatched');
  renderWatchedOrQueue(movieIds);
});

refs.addedToQueue.addEventListener('click', event => {
  // кнопка в хедере выводит очередь фильмов
  refs.modal.classList.add('hide');
  const movieIds = localStorage.getItem('toQueue');
  renderWatchedOrQueue(movieIds);
});
