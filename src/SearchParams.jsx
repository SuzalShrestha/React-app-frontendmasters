import { useState } from "react";
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
  const breeds = [];
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            placeholder="Animal"
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={breeds.length === 0}
            placeholder="Breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SearchParams;