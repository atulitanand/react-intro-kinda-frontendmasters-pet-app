import { useState, useEffect } from "react";

const localCatche = [];

function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCatche[animal]) {
      setBreedList(localCatche[animal]);
    } else {
      requestBreedList();
    }
  }, [animal]);
  async function requestBreedList() {
    // Just so we don't get that weird state while loading when user have selected cat and its showing breed= poodle
    setBreedList([]);
    setStatus("loading");

    const url = `http://pets-v2.dev-apis.com/pets?animal=${animal}`;
    const res = await fetch(url);
    const json = await res.json();
    localCatche[animal] = (() => json.pets.map((pet) => pet.breed))() || [];
    setBreedList(localCatche[animal]);
    setStatus("loaded");
  }
  return [breedList, status];
}

export default useBreedList;
