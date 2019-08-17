import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: "",
    species: ""
  });
  const handleInputChange = event => {
    console.log("well well well, will you look at that", query);
    setQuery({ ...query, [event.target.name]: event.target.value });
  };

  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(query)}>
        <input
          className="nameHere"
          onChange={handleInputChange}
          placeholder="Character Name"
          value={query.name}
          name="name"
        />
        <input
          className="speciesHere"
          onChange={handleInputChange}
          placeholder="Character Species"
          value={query.species}
          name="species"
        />
        <button type="submit">Search The Cosmos</button>
      </form>
    </section>
  );
}
