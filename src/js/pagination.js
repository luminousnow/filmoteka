const btnNav = document.querySelector('.button-navigation');
const btnLeft = document.querySelector('button[data-action="left"]');
const btnPrevious = document.querySelector('button[data-action="previous"]');
const btnCurrent = document.querySelector('button[data-action="current"]');
const btnNext = document.querySelector('button[data-action="next"]');
const btnRight = document.querySelector('button[data-action="right"]');

API_KEY = '9fba788361f0940b39e64c54ec217196';

const url =
  'https:api.themoviedb.org/3/movie/changes?api_key=9fba788361f0940b39e64c54ec217196&movie_id=1';

fetch(url)
  .then(res => res.json)
  .then(console.log);

btnLeft.addEventListener('click', onBtnClickLeft);
btnPrevious.addEventListener('click', onBtnClickPrevious);
btnCurrent.addEventListener('click', onBtnClickCurrent);
btnNext.addEventListener('click', onBtnClickNext);
btnRight.addEventListener('click', onBtnClickRight);

function onBtnClickLeft(event) {
  console.log(event.currentTarget);
}
function onBtnClickPrevious(event) {
  console.log(event.currentTarget);
}
function onBtnClickCurrent(event) {
  console.log(event.currentTarget);
}
function onBtnClickNext(event) {
  console.log(event.currentTarget);
}
function onBtnClickRight(event) {
  console.log(event.currentTarget);
}
