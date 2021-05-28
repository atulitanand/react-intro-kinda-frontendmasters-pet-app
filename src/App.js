// import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import { StrictMode } from "react";
import Details from "./details";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const animals = [
  {
    name: "Luna",
    animal: "Dog",
    breed: "Havanese",
  },
  {
    name: "Pepper",
    animal: "Bird",
    breed: "Cockatiel",
  },
  {
    name: "Beam",
    animal: "Dog",
    breed: "Wheaten Terrier",
  },
];

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt me!!!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector("#root")
);

// <div>
//   <h1>Adopt Me!</h1>
//   {animals.map((animal) => (
//     <Pet props={animal} />
//   ))}
// </div>
