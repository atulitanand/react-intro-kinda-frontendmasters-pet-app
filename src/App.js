// import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

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
      <h1>Adopt me!!!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// <div>
//   <h1>Adopt Me!</h1>
//   {animals.map((animal) => (
//     <Pet props={animal} />
//   ))}
// </div>
