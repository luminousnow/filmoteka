import * as basicLightbox from 'basiclightbox';
import 'basicLightbox/dist/basicLightbox.min.css';

const footerBtn = document.querySelector('#footer-btn');

footerBtn.addEventListener('click', onFooterBtnClick);

function onFooterBtnClick(event) {
  const instance = basicLightbox.create(`
    <h3 class="team-title">Над проектом працювали :</h3>
    <ul class="team">
      <li class="team-list">Andrey Kovsh</li>
      <li class="team-list">Andrii Lavrenchuk</li>
      <li class="team-list">Artem Kiev</li>
      <li class="team-list">Denys Kravchuk</li>
      <li class="team-list">Marina Vetokh</li>
      <li class="team-list">Serhiy Stepanov</li>
      <li class="team-list">Valentyna Chudik</li>
    </ul>
`);
  instance.show();
}
