/*jshint esversion:6*/
const button = document.querySelector('#requestResourceButton');

button.addEventListener('click', function(event){


  if(resourceType.value === 'people') {

//request People
    const personReq = new XMLHttpRequest();
      personReq.addEventListener('load', reqPerson);
      personReq.open('GET', 'http://swapi.co/api/' + resourceType.value + '/'+ resourceId.value + '/');
      personReq.send();

    function reqPerson() {
      const requestData = JSON.parse(this.responseText);
      const name = document.querySelector('#name');
        name.innerHTML = requestData.name;
        middle.innerHTML = requestData.gender;


// request the species
      const speciesReq = new XMLHttpRequest();
      speciesReq.addEventListener('load', speciesRequire);
      speciesReq.open('GET', requestData.species);
      speciesReq.send();

      function speciesRequire() {
        const requestSpecies = JSON.parse(this.responseText);
        last.innerHTML = requestSpecies.name;
      }
    }
  }
if(resourceType.value === 'planets') {

// request planets
  const planetReq = new XMLHttpRequest();
    planetReq.addEventListener('load', reqPlanets);
    planetReq.open('GET', 'http://swapi.co/api/' + resourceType.value + '/' + resourceId.value + '/');
    planetReq.send();

    function reqPlanets() {
      const requestData = JSON.parse(this.responseText);
      const name = document.querySelector('#name');
        name.innerHTML = 'Planet: ' + requestData.name;
        middle.innerHTML = 'Terrain: ' +  requestData.terrain;
        last.innerHTML = 'Population: ' + requestData.population;


for(var i = 0; i < requestData.films.length; i++) {

//new request for movie titles
      const filmReq = new XMLHttpRequest();
      filmReq.addEventListener('load', filmRequire);
      filmReq.open('GET', requestData.films[i]);
      filmReq.send();

      }
    }
  }

// function to load the new title request
function filmRequire() {
  const requestFilms = JSON.parse(this.responseText);
  const movieTitles = requestFilms.title;
  console.log(requestFilms);
  let li = document.createElement('li');
  li.innerHTML = movieTitles;
  movieFilms.appendChild(li);

}

// request planets
  if(resourceType.value === 'starships') {

    const starReq = new XMLHttpRequest();
    starReq.addEventListener('load', requireShips);
    starReq.open('GET', 'http://swapi.co/api/' + resourceType.value + '/' + resourceId.value + '/');
    starReq.send();

    function requireShips() {
      const shipData = JSON.parse(this.responseText);
      console.log(shipData.films);
      const name = document.querySelector('#name');
      name.innerHTML = 'NAME: ' + shipData.name;
      middle.innerHTML = 'Manufacturer: ' + shipData.manufacturer;
      last.innerHTML = 'STARSHIP CLASS : ' + shipData.starship_class;

for(var i = 0; i < shipData.films.length; i++) {

//new request for movie titles
      const filmReq = new XMLHttpRequest();
      filmReq.addEventListener('load', filmRequire);
      filmReq.open('GET', shipData.films[i]);
      filmReq.send();

      }
    }
  }

// function to load the new title request
  function filmRequire() {
    const requestFilms = JSON.parse(this.responseText);
    const movieTitles = requestFilms.title;
    console.log(requestFilms);
    let li = document.createElement('li');
    li.innerHTML = movieTitles;
    movieFilms.appendChild(li);
  }
});
