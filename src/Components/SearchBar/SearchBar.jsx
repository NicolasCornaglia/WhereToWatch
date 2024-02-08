import Card from "../Card/Card";
import React, { useState } from "react";
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

  // filter the movies that you get to have streaming info 
  const foundMovies = [];
  const notFoundMovies = [];

  moviesAPIResult.result.map((el) => {
    if (Object.keys(el.streamingInfo).length !== 0) {
      return foundMovies.push({title: el.title, streamingInfo: el.streamingInfo, imdbId: el.imdbId, type: el.type});
    }
    return notFoundMovies.push(
      {title: el.title, streamingInfo: `${`Not available in ${selectedCountry}`}`, imdbId: el.imdbId, type: el.type});
  });

  console.log(foundMovies);
  console.log(notFoundMovies);

  return (
    <>
      <div className="flex flex-row justify-center items-center ">
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

      <div className="p-5 text-sm">
        <span>Not available in {selectedCountry}: </span>
        {notFoundMovies.map(movie => {
          return (<span className="px-3">{movie.title}</span>)
        })}
      </div>

      <div className="flex flex-col">
        {foundMovies.map((movie) => {
          return (
            <li key={movie.imdbId} className="list-none odelay-300 m-5">
              <Card
                title={movie.title}
                streamingInfo={Object.values(movie.streamingInfo)}
                imdbId={movie.imdbId}
                type={movie.type}
                country={selectedCountry}
              />
            </li>
          );
        })}
        ;
      </div>
    </>
  );
};

export default SearchBar;
