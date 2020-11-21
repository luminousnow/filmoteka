export const refs = {
  mainWrapper: document.querySelector('.js-films-wrapper-list'), // ссылка на UL в который пойдут все фильмы
  modal: document.querySelector('.modal-popup'), // DIV внизу страници в который рендерится полная инфа о фильме (по клику на карточку фильма)
  addedToWatched: document.querySelector('.added-to-watched'), // ссылка на кнопку в хедере чтоб вывести просмотренные фильмы
  addedToQueue: document.querySelector('.added-to-queue'), // ссылка на кнопку в хедере чтоб вывести добавленные в очередь
};
