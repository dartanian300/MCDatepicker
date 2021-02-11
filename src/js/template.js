export const spanTemplate = (direction, content) => {
	const units = direction === 'next' ? '-100' : '100';
	return `<span style="transform: translateX(${units}px);">${content}</span>`;
};

export default `<div class="mc-display">
<div class="mc-display__header">
<h3 class="mc-display__day">Thursday</h3>
</div>
<div class="mc-display__body">
<div class="mc-display__data mc-display__data--primary">
<h1 class="mc-display__date">1</h1>
</div>
<div class="mc-display__data mc-display__data--secondary">
<h3 class="mc-display__month">January</h3>
<h2 class="mc-display__year">1970</h2>
</div>
</div>
</div>
<div class="mc-picker">
<div class="mc-picker__header mc-container">
<div class="mc-select__month">
<button id="mc-picker__month--prev" class="mc-select__nav mc-select__nav--prev">
<svg class="icon-angle icon-angle--left" viewBox="0 0 256 512" width='10px' height='100%'>
<path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
</svg>
</button>
<div id="mc-current--month" class="mc-select__data mc-select__data--month">
<span>January</span>
</div>
<button id="mc-picker__month--next" class="mc-select__nav mc-select__nav--next">
<svg class="icon-angle icon-angle--right" viewBox="0 0 256 512" width='10px' height='100%'>
<path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
</svg>
</button>
</div>
<div class="mc-select__year">
<button id="mc-picker__year--prev" class="mc-select__nav mc-select__nav--prev">
<svg class="icon-angle icon-angle--left" viewBox="0 0 256 512" width='10px' height='100%'>
<path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
</svg>
</button>
<div id="mc-current--year" class="mc-select__data mc-select__data--year">
<span>1970</span>
</div>
<button id="mc-picker__year--next" class="mc-select__nav mc-select__nav--next">
<svg class="icon-angle icon-angle--right" viewBox="0 0 256 512" width='10px' height='100%'>
<path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
</svg>
</button>
</div>
</div>
<div class="mc-picker__body">
<table class="mc-table mc-container">
<thead class="mc-table__header">
<tr>
<th class="mc-table__weekday">S</th>
<th class="mc-table__weekday">M</th>
<th class="mc-table__weekday">T</th>
<th class="mc-table__weekday">W</th>
<th class="mc-table__weekday">T</th>
<th class="mc-table__weekday">F</th>
<th class="mc-table__weekday">S</th>
</tr>
</thead>
<tbody class="mc-table__body">
<tr class="mc-table__week">
<td class="mc-date mc-date--inactive" data-val-date="Sun Dec 28 1969 02:00:00 GMT+0200 (Eastern European Standard Time)">28</td>
<td class="mc-date mc-date--inactive" data-val-date="Mon Dec 29 1969 02:00:00 GMT+0200 (Eastern European Standard Time)">29</td>
<td class="mc-date mc-date--inactive" data-val-date="Tue Dec 30 1969 02:00:00 GMT+0200 (Eastern European Standard Time)">30</td>
<td class="mc-date mc-date--inactive" data-val-date="Wed Dec 31 1969 02:00:00 GMT+0200 (Eastern European Standard Time)">31</td>
<td class="mc-date mc-date--active" data-val-date="Thu Jan 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">1</td>
<td class="mc-date mc-date--active" data-val-date="Fri Jan 02 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">2</td>
<td class="mc-date mc-date--active" data-val-date="Sat Jan 03 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">3</td>
</tr>
<tr class="mc-table__week">
<td class="mc-date mc-date--active" data-val-date="Sun Jan 04 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">4</td>
<td class="mc-date mc-date--active" data-val-date="Mon Jan 05 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">5</td>
<td class="mc-date mc-date--active" data-val-date="Tue Jan 06 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">6</td>
<td class="mc-date mc-date--active" data-val-date="Wed Jan 07 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">7</td>
<td class="mc-date mc-date--active" data-val-date="Thu Jan 08 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">8</td>
<td class="mc-date mc-date--active" data-val-date="Fri Jan 09 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">9</td>
<td class="mc-date mc-date--active" data-val-date="Sat Jan 10 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">10</td>
</tr>
<tr class="mc-table__week">
<td class="mc-date mc-date--active" data-val-date="Sun Jan 11 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">11</td>
<td class="mc-date mc-date--active" data-val-date="Mon Jan 12 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">12</td>
<td class="mc-date mc-date--active" data-val-date="Tue Jan 13 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">13</td>
<td class="mc-date mc-date--active" data-val-date="Wed Jan 14 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">14</td>
<td class="mc-date mc-date--active" data-val-date="Thu Jan 15 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">15</td>
<td class="mc-date mc-date--active" data-val-date="Fri Jan 16 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">16</td>
<td class="mc-date mc-date--active" data-val-date="Sat Jan 17 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">17</td>
</tr>
<tr class="mc-table__week">
<td class="mc-date mc-date--active" data-val-date="Sun Jan 18 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">18</td>
<td class="mc-date mc-date--active" data-val-date="Mon Jan 19 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">19</td>
<td class="mc-date mc-date--active" data-val-date="Tue Jan 20 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">20</td>
<td class="mc-date mc-date--active" data-val-date="Wed Jan 21 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">21</td>
<td class="mc-date mc-date--active" data-val-date="Thu Jan 22 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">22</td>
<td class="mc-date mc-date--active" data-val-date="Fri Jan 23 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">23</td>
<td class="mc-date mc-date--active" data-val-date="Sat Jan 24 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">24</td>
</tr>
<tr class="mc-table__week">
<td class="mc-date mc-date--active" data-val-date="Sun Jan 25 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">25</td>
<td class="mc-date mc-date--active" data-val-date="Mon Jan 26 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">26</td>
<td class="mc-date mc-date--active" data-val-date="Tue Jan 27 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">27</td>
<td class="mc-date mc-date--active" data-val-date="Wed Jan 28 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">28</td>
<td class="mc-date mc-date--active" data-val-date="Thu Jan 29 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">29</td>
<td class="mc-date mc-date--active" data-val-date="Fri Jan 30 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">30</td>
<td class="mc-date mc-date--active" data-val-date="Sat Jan 31 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">31</td>
</tr>
<tr class="mc-table__week">
<td class="mc-date mc-date--inactive" data-val-date="Sun Feb 01 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">1</td>
<td class="mc-date mc-date--inactive" data-val-date="Mon Feb 02 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">2</td>
<td class="mc-date mc-date--inactive" data-val-date="Tue Feb 03 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">3</td>
<td class="mc-date mc-date--inactive" data-val-date="Wed Feb 04 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">4</td>
<td class="mc-date mc-date--inactive" data-val-date="Thu Feb 05 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">5</td>
<td class="mc-date mc-date--inactive" data-val-date="Fri Feb 06 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">6</td>
<td class="mc-date mc-date--inactive" data-val-date="Sat Feb 07 1970 02:00:00 GMT+0200 (Eastern European Standard Time)">7</td>
</tr>
</tbody>
</table>
</div>
<div class="mc-picker__footer mc-container">
<div class="mc-footer__section mc-footer__section--primary">
<button id="mc-btn__clear" class="mc-btn mc-btn--danger">Clear</button>
</div>
<div class="mc-footer__section mc-footer__section--secondary">
<button id="mc-btn__cancel" class="mc-btn mc-btn--success">CANCEL</button>
<button id="mc-btn__ok" class="mc-btn mc-btn--success">OK</button>
</div>
</div>
</div>`;
