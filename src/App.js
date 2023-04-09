import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Body from "./components/router";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Body/>
    </BrowserRouter>

  );
}

export default App;
