

// We create a var to hold the constant url .
var imgUrl = "https://image.tmdb.org/t/p/w185_and_h278_bestv2/";

// Create a function that take the value of the input search
function getMovieData (event) {
  event.preventDefault();
  var searchValue = document.getElementById("search").value;

  // Create a fetch function to give the data we need by useing the api .
  fetch("https://api.themoviedb.org/3/search/movie?api_key=3bbdbed2c291857dbe65e935c9dea7ed&language=en-US&query=" + searchValue + "&page=1&include_adult=false")
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      var infoArr = [data.results[0], data.results[1], data.results[2]];
      infoArr.forEach(function forEachTitle (el , i){
        // console.log("wrong id = ", "image" + i+1);
        document.getElementById("title" + (i+1)).textContent = el.title;
        document.getElementById("date" + (i+1)).textContent = el.release_date;
        document.getElementById("summary" + (i+1)).textContent = el.overview;
        document.getElementById("average" + (i+1)).textContent = el.vote_average;

      })

      infoArr.forEach(function forEachImge (el , i){
        document.getElementById("image" + (i+1)).src = imgUrl + el.poster_path;
      })

      //
      // data.results.forEach(function forEachDate (el , i){
      // })
      //
      // data.results.forEach(function forEachSummary (el , i){
      // })
      //
      // data.results.forEach(function forEachAverage (el , i){
      // })
})

      // var result1 = data.results[0];
      //
      //
      // document.getElementById("title1").textContent = result1.title;
      // document.getElementById("image1").src = imgUrl + result1.poster_path;
      // document.getElementById("date1").textContent = result1.release_date;
      // document.getElementById("summary1").textContent = result1.overview;
      // document.getElementById("average1").textContent = result1.vote_average;
      //
      // var result2 = data.results[1] ;
      //
      // document.getElementById("title2").textContent = result2.title;
      // document.getElementById("image2").src = imgUrl + result2.poster_path;
      // document.getElementById("date2").textContent = result2.release_date;
      // document.getElementById("summary2").textContent = result2.overview;
      // document.getElementById("average2").textContent = result2.vote_average;
      //
      // var result3 = data.results[2] ;
      //
      // document.getElementById("title3").textContent = result3.title;
      // document.getElementById("image3").src = imgUrl + result3.poster_path;
      // document.getElementById("date3").textContent = result3.release_date;
      // document.getElementById("summary3").textContent = result3.overview;
      // document.getElementById("average3").textContent = result3.vote_average;




fetch("https://api.giphy.com/v1/gifs/search?api_key=tMALhz0175MYMgJzQIr0gFPUDLpxM0P5&q=" + searchValue + "&limit=25&offset=0&rating=G&lang=en")
.then (function(response) {
  return response.json();
})

.then(function(data) {
  var gifsArr = [data.data[0], data.data[1], data.data[2]];
  gifsArr.forEach(function (el , i){
    console.log("i = ",i);
     document.getElementById("giphy" + (i+1)).src = el.images.original.url;
     if (i > 2){

     }
  })

  //  document.getElementById("giphy1").src = data.data[0].images.original.url;
  // document.getElementById("giphy2").src = data.data[1].images.original.url;
  // document.getElementById("giphy3").src = data.data[2].images.original.url;

})
}



  // document.getElementById("jiphy1").src = data.original_still;
document.getElementById("button").addEventListener("click", getMovieData);
// Adding a callback to have a click
