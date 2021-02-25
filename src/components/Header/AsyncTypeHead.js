import { useState } from "react";
import { AsyncTypeahead as ATH } from "react-bootstrap-typeahead";
import config from "../../config";
import ApiService from "../../services/ApiService";

const AsyncTypeahead = ({ setMoviesList, history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [localMoviesList, setLocalMoviesList] = useState([]);

  const handleSearch = (query) => {
    setIsLoading(true);

    ApiService.get(`?s=${query}&apikey=${config.api.apiKey}`).then(
      (response) => {
        const {
          data: { Search },
        } = response;

        if (Search && Search.length) {
          setMoviesList && setMoviesList(Search);
          setLocalMoviesList(Search);
        }
        setIsLoading(false);
      }
    );
  };

  const filterBy = () => true;

  return (
    <ATH
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      labelKey="Title"
      minLength={2}
      onSearch={handleSearch}
      options={localMoviesList}
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
          <span onClick={() => history.push(movie.imdbID)}>{movie.Title}</span>
        </>
      )}
    />
  );
};

export default AsyncTypeahead;
