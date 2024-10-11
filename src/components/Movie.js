import MovieItem from "./MovieItem";
const Movie = (props)=>{

    return props.myMovies.map(
        (movie)=>{
            return <MovieItem myMovies={movie} key = {movie.imdbID}/>
        }
    );
}

export default Movie;