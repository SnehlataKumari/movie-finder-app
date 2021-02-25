import { useState } from "react";
import { AsyncTypeahead as ATH } from "react-bootstrap-typeahead";
import config from "../../config";
import ApiService from "../../services/ApiService";

const AsyncTypeahead = ({ moviesList, setMoviesList, history }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (query) => {
    setIsLoading(true);

    ApiService.get(`?s=${query}&apikey=${config.api.apiKey}`).then(
      (response) => {
        const {
          data: { Search },
        } = response;

        if (Search && Search.length) {
          setMoviesList(Search);
        }
        setIsLoading(false);
      }
    );
  };

  const filterBy = () => true;

  function onClick(movie, history) {
    console.log(history);
    history.push(movie.imdbID);
  }

  return (
    <ATH
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      labelKey="Title"
      minLength={2}
      onSearch={handleSearch}
      options={moviesList}
      placeholder="Search for a movie..."
      renderMenuItemChildren={(movie, props) => (
        <>
          <img
            alt={movie.Title}
            src={movie.Poster}
            style={{
              height: "24px",
              marginRight: "10px",
              width: "24px",
            }}
          />
          <span onClick={(e) => onClick(movie, history)}>{movie.Title}</span>
        </>
      )}
    />
  );
};

export default AsyncTypeahead;
