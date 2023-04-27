import { Route,Routes } from "react-router-dom";

import Home from "../home";
import Pokemon from "../pokemon";

export default () =>  {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/pokemon/:id" element={<Pokemon/>}/>

        </Routes>

    )


}