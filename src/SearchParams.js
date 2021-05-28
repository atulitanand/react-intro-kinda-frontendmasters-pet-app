import { useState, useEffect, useContext } from "react";
import ThemeContext from "./ThemeContext";
import Pet from "./Pet";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["dog", "rabbit", "reptile", "bird"];
const SearchParams = () => {
  const [location, setLocation] = useState("");

  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  const [pets, setPets] = useState([]);

  const [breeds] = useBreedList(animal);

  // CONTEXT API
  const [theme, setTheme] = useContext(ThemeContext);
  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const attributes = (function () {
      let attr = String();
      if (animal) {
        attr += `animal=${animal}`;
      }
      if (location) {
        attr = attr.concat(`&location=${location}`);
      }
      if (breed) {
        attr = attr.concat(`&breed=${breed}`);
      }
      console.log("attr", attr);
      return attr;
    })();
    const url = `http://pets-v2.dev-apis.com/pets?${attributes}`;
    const res = await fetch(url);
    const json = await res.json();
    setPets(json.pets);
    console.log(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            placeholder="Seattle, WA"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="darkblue">Dark Blue</option>
            <option value="peru">Peru</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <div>
        <Results pets={pets} />
      </div>
    </div>
  );
};

export default SearchParams;
