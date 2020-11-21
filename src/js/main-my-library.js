import { refs } from './get-refs.js';
import { renderWatchedOrQueue } from './api-servis';

refs.addedToWatched.addEventListener('click', event => {
  // кнопка в хедере выводит просмотренные фильмы
  // refs.modal.classList.add('hide');
  const movieIds = localStorage.getItem('toWatched');
  renderWatchedOrQueue(movieIds);
});

refs.addedToQueue.addEventListener('click', event => {
  // кнопка в хедере выводит очередь фильмов
  // refs.modal.classList.add('hide');
  const movieIds = localStorage.getItem('toQueue');
  renderWatchedOrQueue(movieIds);
});