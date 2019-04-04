// We create a var to hold the constant url .
var imgUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";

// Create a function that take the value of the input search
function getMovieData(event) {
  event.preventDefault();
  var searchValue = document.getElementById("search").value;

  // Create a fetch function to give the data we need by useing the api .
  fetch(
    "https://api.themoviedb.org/3/search/movie?api_key=3bbdbed2c291857dbe65e935c9dea7ed&language=en-US&query=" +
      searchValue +
      "&page=1&include_adult=false"
  )
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      var infoArr = [data.results[0], data.results[1], data.results[2]];
      infoArr.forEach(function forEachTitle(el, i = 1) {
        document.getElementById("title" + (i)).textContent = el.title;
        document.getElementById("date" + (i + 1)).textContent = el.release_date;
        document.getElementById("summary" + (i + 1)).textContent = el.overview;
        document.getElementById("average" + (i + 1)).textContent =
          el.vote_average;
      });

      infoArr.forEach(function forEachImge(el, i) {
        document.getElementById("image" + (i + 1)).src =
          imgUrl + el.poster_path;
      });
    });

  fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=tMALhz0175MYMgJzQIr0gFPUDLpxM0P5&q=" +
      searchValue +
      "&limit=25&offset=0&rating=G&lang=en"
  )
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      var gifsArr = [data.data[0], data.data[1], data.data[2]];
      gifsArr.forEach(function(el, i) {
        console.log("i = ", i);
        document.getElementById("giphy" + (i + 1)).src = el.images.original.url;
      });
    });
}

document.getElementById("button").addEventListener("click", getMovieData);
// Adding a callback to have a click
