import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Body from "./components/router";
import Context from "./context";
import { useEffect, useState } from "react";

function App() {

  const [characters, setCharacters] = useState ([])
  const globalState = { characters,setCharacters}

  useEffect (() =>{
    fetch ("https://rickandmortyapi.com/api/character",)
    .then((response) => response.json())
    .then((data)=> setCharacters(data.results.map(val => {
      return {...val,favorito:false}
    })))
  },[])

  

  return (
    <Context.Provider value= {globalState}>
    <BrowserRouter>
    <Navbar/>
    <Body/>
    </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
