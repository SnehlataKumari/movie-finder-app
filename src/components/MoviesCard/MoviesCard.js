import Card from "react-bootstrap/Card";
import "./MoviesCard.css";

function MoviesCard ({movie, className, onClick}) {

  return (
    <Card
      style={{ width: "18rem", margin: "auto" }}
      className={className}
      onClick={onClick}
    >
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>
          {movie.Title} {movie.imdbRating && <span> IMDB: {movie.imdbRating} </span>}
        </Card.Title>
        {movie.Plot && <Card.Text>{movie.Plot}</Card.Text>}
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{movie.Year}</small>
      </Card.Footer>
    </Card>
  );
}
export default MoviesCard;