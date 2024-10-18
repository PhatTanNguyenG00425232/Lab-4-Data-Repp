import Movie from "./Movie";
import axios from "axios";
import { useEffect, useState } from "react";

const Read = () => {


    //useState to add state variables to component
    const[movies,setMovies ]= useState([]);
    // Sample movie data as an array of objects
    const data = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
    ];

    useEffect(
        ()=>{
            {/*make an HTTP Get call to return the JSON form */}
            axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
            .then((response)=>{//set the movie from the JSON
                console.log(response.data);
                setMovies(response.data.movies)
            })
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
        },[]
    );

    return (
        <div>
            <h3>Hello from the Read component</h3>
            {/* Render the Movie component and pass the movie data*/}
            <Movie myMovies={movies} />
        </div>
    );
};

export default Read;
