import Card from "react-bootstrap/Card";
import "./MoviesCard.css";

function MoviesCard ({movie, className, onClick}) {

  return (
    <>
      <Card style={{ width: "18rem", margin: "auto" }} className={className} onClick={onClick}>
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Title}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{movie.Title}</small>
        </Card.Footer>
      </Card>
    </>
  );
}
export default MoviesCard;