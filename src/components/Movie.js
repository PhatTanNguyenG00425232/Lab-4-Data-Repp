import MovieItem from "./MovieItem";

function Movie(props) {
    // Destructure myMovies from props, defaulting to an empty array if not provided
    const { myMovies = [] } = props;

    //Create a MovieItem for each movie
    return myMovies.map((movie) => (
        //Passing the current movie and a unique key
        <MovieItem mymovie={movie} key={movie.imdbID} />
    ));
}

export default Movie;
