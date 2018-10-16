




function performRequestUsingXMLHttpRequest(){

  var request = new XMLHttpRequest()

  request.onload = function() {

    let movies = JSON.parse(this.responseText)
    let movieItems = movies.Search.map(function(movie){
      return `<li>
      <label>${movie.Title}</label>
      <img onclick = "showMore('${movie.imdbID}')" class ="img" src= "${movie.Poster}"/>
      <p>${movie.Year}</p>


      </li>`
    })
    moviesList.innerHTML = movieItems.join('')
  }

  request.open("GET", "http://www.omdbapi.com/?s=batman&apikey=" + mykey)
  request.send()
}

function showMore(movieID){
  var request2 = new XMLHttpRequest()
  request2.onload=function() {
    console.log(this.responseText)
    // let movieID = JSON.parse(this.responseText)
  }
  request2.open("GET", "http://www.omdbapi.com/?i=" +movieID + "&apikey=" + mykey)
    request2.send()
}

performRequestUsingXMLHttpRequest()
