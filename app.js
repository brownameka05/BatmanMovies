




function performRequestUsingXMLHttpRequest(){

  var request = new XMLHttpRequest()

  request.onload = function() {
    console.log(this.responseText)
    let movies = JSON.parse(this.responseText)
    let movieItems = movies.Search.map(function(movie){
      return `<li>
      <label>${movie.Title}</label>
      <img onclick = "showMore(${movie.imdbID})"class ="img" src= "${movie.Poster}"/>
      <p>${movie.Year}</p>
      <p>${movie.Rated}</p>
      <p>${movie.Released}</p>
      <p>${movie.Director}</p>

      </li>`
    })
    moviesList.innerHTML = movieItems.join('')
  }

Brown put your new function here for imdbID similar to above





  request.open("GET", "http://www.omdbapi.com/?s=batman&apikey=mykey")
  request.send()
}

performRequestUsingXMLHttpRequest()
