import Switch from "react-switch";
import { Navbar } from "react-bootstrap";
import { useState } from "react";
import logo from "../../assets/images/sova_FINAL-02.webp";
import AsyncTypeahead from "./AsyncTypeHead";
import store from "../../redux/store";
import {setTheme} from '../../redux/theme';

function Header({theme, moviesList, setMoviesList, history}) {
  const [checked, setChecked] = useState(false);
  
  return (
    <Navbar bg={theme} expand="lg">
      <Navbar.Brand href="#home">
        <img src={logo} alt="Sova Health" height="20px" />
      </Navbar.Brand>
      <AsyncTypeahead moviesList={moviesList} setMoviesList={setMoviesList} history={history}/>
      <Switch
        onChange={(checked) => {
          setChecked(checked);

          const theme = checked ? "dark" : "light";
          store.dispatch(setTheme(theme));
        }}
        checked={checked}
      />
    </Navbar>
  );
}

export default Header;
