import {refs} from './get-refs'

export function renderStartPagePagination(arrayMovieData){
    // Сюда приходит массив movieData Прямо с бека
    let html = `
        <li class="pagination-list__item">
            <a class="pagination-list__item-link js-pagination-item" href="#">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12.6666 8H3.33325" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.99992 12.6667L3.33325 8.00004L7.99992 3.33337" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </a>
        </li>
        <li class="pagination-list__item hide-in-mobile">
            <a class="pagination-list__item-link js-pagination-item" href="#">1</a>
        </li>
        <li class="pagination-list__item pag-dots hide-in-mobile ">
            <a class="pagination-list__item-link js-pagination-item" href="#">...</a>
        </li>
        <li class="pagination-list__item">
            <a class="pagination-list__item-link js-pagination-item" href="#">13</a>
        </li>
        <li class="pagination-list__item">
            <a class="pagination-list__item-link js-pagination-item" href="#">14</a>
        </li>
        <li class="pagination-list__item current-page">
            <a class="pagination-list__item-link js-pagination-item" href="#">15</a>
        </li>
        <li class="pagination-list__item">
            <a class="pagination-list__item-link js-pagination-item" href="#">16</a>
        </li>
        <li class="pagination-list__item">
            <a class="pagination-list__item-link js-pagination-item" href="#">17</a>
        </li>
        <li class="pagination-list__item pag-dots hide-in-mobile">
            <a class="pagination-list__item-link js-pagination-item" href="#">...</a>
        </li>
        <li class="pagination-list__item hide-in-mobile">
            <a class="pagination-list__item-link js-pagination-item" href="#">20</a>
        </li>
        <li class="pagination-list__item">
            <a class="pagination-list__item-link js-pagination-item" href="#">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.33341 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.00008 12.6667L12.6667 8.00004L8.00008 3.33337" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </li>
    `
    refs.paginationList.innerHTML = html
    //console.log('renderStartPagePagination', arrayMovieData)
}

export function renderLibraryPagination(movie){
    // Сюда приходят по одному movie
    // А тут надо знать сколько id в localstorage
    //console.log('renderLibraryPagination', movie)
}