// import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

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
      <h1>Adopt Me!</h1>
      {animals.map((animal) => (
        <Pet props={animal} />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
