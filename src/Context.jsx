import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const CharStates = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
const Context = ({ children }) => {
  const [theme, setTheme] = useState(); //Lo dejo para que lo resuelvan ustedes
  const [favs, setFavs] = useState(lsFavs);
  const [list, setList] = useState([]);
  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setList(res.data.results);
    });
  }, []);
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);
  return (
    <CharStates.Provider value={{ theme, setTheme, favs, setFavs, list }}>
      {children}
    </CharStates.Provider>
  );
};
export default Context;

export const useCharStates = () => {
  return useContext(CharStates);
};
