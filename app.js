const seedData = [
{band:  'Barry Adamson', album: 'As above so below', genre: 'Contemporary Jazz'},
{band:  'Metallica', album: 'St Anger', genre: 'Metal'},
{band:  'Blondie', album: 'Plastic Letters', genre: 'New Wave'},
{band:  'Tori Amos', album: 'Little Earthquakes', genre: 'Chamber Pop'},
];

const formSubmit = function(eventt) {
  eventt.preventDefault();
  const form = eventt.target;
  createListItemFromInput(form);
  form.reset();
};

const createListItemFromInput = function(form) {
  const band = formInfo(form);
  const list = makeListItem(band);
  addListItem(list);
};

const formInfo = (form) => ({
  band: form.band.value,
  album: form.album.value,
  genre: form.genre.value
});

const makeListItem = function(band) {
  const list = document.createElement('list');
  list.textContent = band.band;


// const bandSpan = document.createElement('span');
// bandSpan.classList.add('band');
// bandSpan.textContent = band.band;
// list.appendChild(bandSpan);

const albumSpan = document.createElement('span');
albumSpan.classList.add('album');
albumSpan.textContent = band.album;
list.appendChild(albumSpan);

const genreSpan = document.createElement('span');
genreSpan.classList.add('genre');
genreSpan.textContent = band.genre;
list.appendChild(genreSpan);


return list;

};

const addListItem = function(listItem) {
  const listHolder = document.querySelector('#list');
  listHolder.appendChild(listItem);
};

document .addEventListener('DOMContentLoaded',() => {
  const form = document.querySelector('form');
  form.addEventListener('submit', formSubmit);

  seedData.forEach((band) =>{
    const list = makeListItem(band);
    addListItem(list);
  });
});
