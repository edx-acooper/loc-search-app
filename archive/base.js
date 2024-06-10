const searchForm = document.querySelector('#search');
const qEl = document.querySelector('#q');


console.log(qEl);

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();

  console.log(qEl.value);

  fetch('http://www.omdbapi.com/?apikey=trilogy&t=Spider-man+far+from+home')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
    })
});
