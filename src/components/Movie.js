import MovieItem from "./MovieItem";
function Movie(props) {
    return props.myMovies.map((movie) => (
      <MovieItem mymovie={movie} key={movie.imdbID} />
    ));
  }
export default Movie;