import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Body from "./components/router";
import Context from "./context";
import { useEffect, useState } from "react";

function App() {

  const [pokemons, setPokemons] = useState ([])
  const globalState = { pokemons,setPokemons}

  useEffect (() =>{
    fetch ("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
    .then((response) => response.json())
    .then((data)=> setPokemons(data.results.map(val => {
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
