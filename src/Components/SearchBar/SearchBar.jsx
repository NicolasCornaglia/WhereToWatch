import Card from "../Card/Card";
import React, { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import moviesAPIResult from "../../data/movies.json";

const SearchBar = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [input, setInput] = useState("");

  const printCountryAndInput = () => {
    console.log(selectedCountry, input);
  };

  const settingInput = () => {
    setInput(document.getElementById("myInput").value);
  };

  const movies = moviesAPIResult.result.map((el) => {
    return [el.title, el.streamingInfo, el.imdbId];
  });

  return (
    <>
      <div className="flex flex-row justify-center items-center m-15">
        <ReactFlagsSelect
          selected={selectedCountry}
          onSelect={(code) => setSelectedCountry(code)}
          searchable
          className="bg-white text-slate-400 mr-1 rounded-l-3xl h-10 w-1/4 border-0"
          selectButtonClassName="menu-flags-button"
        />
        <input
          type="text"
          placeholder="Type a movie or serie"
          className="my-5 mr-2 py-2 px-3 rounded-r-3xl w-1/3 text-slate-400"
          id="myInput"
          onChange={settingInput}
        />
        <button
          className="bg-purple-600 m-15 py-2 px-3 rounded-3xl"
          onClick={printCountryAndInput}
        >
          Search
        </button>
      </div>

      <div className="flex flex-col content-center">
        {movies.map((movie) => {
          return (
            <li key={movie[2]} className="list-none odelay-300">
              <Card title={movie[0]} streamingInfo={movie[1]} imdbId={movie[2]} country={selectedCountry}/>
            </li>
          );
        })}
        ;
      </div>
    </>
  );
};

export default SearchBar;
