import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import PokemonCreate from "././components/PokemonCreate/PokemonCreate";
import Detail from "./components/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exath path="/home" component={Home} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/pokemon" component={PokemonCreate} />
          <Route exact path="/pokemon/:id" component={Detail} />
        </Switch>
        <h1>Henry Pokemon</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
