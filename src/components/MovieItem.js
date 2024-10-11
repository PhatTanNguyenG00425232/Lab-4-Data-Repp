
const MovieItem= (props) =>{
useEffect(() => {
        console.log("Movie Item:", props.mymovie);
      }, [props.mymovie]); // Only run this effect when the mymovie prop changes
return (
        <div>
            <h3>{props.myMovies.Title}</h3>
            <h3>{props.myMovies.Year}</h3>
            <img src={props.myMovies.Poster}/>
        </div>
);
}
export default MovieItem;