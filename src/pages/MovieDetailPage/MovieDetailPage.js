import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./MovieDetailPage.css";
import config from "../../config";
import ApiService from "../../services/ApiService";
import { useEffect, useState } from "react";
import MoviesCard from "../../components/Header/MoviesCard/MoviesCard";
import "./MovieDetailPage.css";
import { connect } from "react-redux";

function MovieDetailPage({ theme }) {
  const [movie, setMovie] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  let { movieId } = useParams();

  useEffect(() => {
    ApiService.get(`?i=${movieId}&apikey=${config.api.apiKey}`).then(
      (response) => {
        console.log(response);
        const { data } = response;
        if (data) {
          console.log(data);
          setMovie(data);
        }
      }
    );
  }, []);

  return (
    <>
      <Header
        theme={theme}
        moviesList={moviesList}
        setMoviesList={setMoviesList}
      />
      <div className={`${theme}`}>
      <MoviesCard movie={movie} className={theme} />
      </div>
      {/* <h1 className="description">Show detail of Movie {movieId}</h1> */}
    </>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

export default connect(mapStateToProps)(MovieDetailPage);
