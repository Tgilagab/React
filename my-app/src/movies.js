    



export const Movies = () => {

const movie = {"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","Rated":"PG","Released":"25 May 1977","Runtime":"121 min","Genre":"Action, Adventure, Fantasy, Sci-Fi","Director":"George Lucas","Writer":"George Lucas","Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing","Plot":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.","Language":"English","Country":"USA, UK","Awards":"Won 6 Oscars. Another 58 wins & 29 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"90/100"}],"Metascore":"90","imdbRating":"8.6","imdbVotes":"1,255,061","imdbID":"tt0076759","Type":"movie","DVD":"10 Oct 2016","BoxOffice":"$460,998,507","Production":"Lucasfilm Ltd.","Website":"N/A","Response":"True"}

  return (

  <div className='container'>
    <div className='Poster'>
      <img src={movie.Poster} alt = {movie.Title} />
    </div>

    <div className='Wapper_tag'>
      <div className = 'title'>{movie.Title}</div>
      <div className = 'gener'>{movie.Genre}</div>
      <div className = 'plot'>{movie.Plot}</div>
      <div className='actors' >{movie.Actors}</div>
      <button>{movie.imdbRating}</button>
      <button>{movie.Rated}</button>
      <button>{movie.Runtime}</button>
    </div>
  </div>
    );
}

