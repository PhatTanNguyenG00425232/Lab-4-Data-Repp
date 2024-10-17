import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

function MovieItem(props) {
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

  return (
    <div>
      <Card style={{ width: '22rem' }}> 
        {/* Header displaying the movie title*/}
        <Card.Header>{props.mymovie?.Title || "Title Not Available"}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* Image displaying the movie poster*/}
            <img 
              variant="top" 
              src={props.mymovie.Poster } 
              alt={props.mymovie.Title} 
              style={{ maxWidth: '100%', height: 'auto' }} // Ensures image fits well in the card
            />
            {/* Footer displaying the release year of the movie*/}
            <footer>{props.mymovie?.Year || "Year Not Available"}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieItem;  
