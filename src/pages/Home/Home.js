import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Home.css";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import MoviesCard from "../../components/Header/MoviesCard/MoviesCard";

function HomePage({ theme }) {
  const [moviesList, setMoviesList] = useState([]);

  const history = useHistory();

  const onClickMovie = (movie) => {
    history.push(movie.imdbID);
  };

  return (
    <>
      <Header
        theme={theme}
        moviesList={moviesList}
        setMoviesList={setMoviesList}
        history={history}
      />
      <div className={`${theme}`}>
        {moviesList.length < 1 ? (
          <h4 className="h1" style={{ minHeight: document.documentElement.clientHeight }}>
            Type something to see search results
          </h4>
        ) : (
          <Row style={{ margin: "auto" }}>
            {moviesList.map((movie, index) => (
              <Col key={index} style={{ justifyContent: "space-between" }}>
                <MoviesCard
                  movie={movie}
                  className={theme}
                  onClick={(e) => onClickMovie(movie)}
                />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(HomePage);
