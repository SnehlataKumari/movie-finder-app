import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "../pages/Home/Home";
import MovieDetailPage from "../pages/MovieDetailPage/MovieDetailPage";

function Routes() {

  return (
    <>
      <Router history={useHistory}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/:movieId">
            <MovieDetailPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
