

export const fetch_api = () => {


// PUT YOUR API KEY HERE
    const myApiKey = '7b9bf795';

//`http://www.omdbapi.com/?t=batman&apikey=7b9bf795`

   

    async function fetchMovieDataByName(title) {
    const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${myApiKey}`);
    const myMovieList = response.json();
    }



    async function fetchMovieDataById(id) {
    const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${myApiKey}`);
    const myMovie = response.json();
    }

    fetchMovieDataByName("star wars");
    fetchMovieDataById("tt0080684");
    console.log(myMovieList);
    console.log(myMovie);

return( 

    <div>
    <p> "this is fetch js output "</p>
    <div>{myMovie}</div>
    <div>{myMovieList}</div>
    </div>

    );
}