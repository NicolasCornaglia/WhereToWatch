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
      return foundMovies.push({
        title: el.title,
        streamingInfo: el.streamingInfo,
        imdbId: el.imdbId,
        type: el.type,
      });
    }
    return notFoundMovies.push({
      title: el.title,
      streamingInfo: `${`Not available in ${selectedCountry}`}`,
      imdbId: el.imdbId,
      type: el.type,
    });
  });

  console.log(foundMovies);
  console.log(notFoundMovies);

  return (
    <>
      <div className="flex flex-col justify-between items-center gap-3 md:flex-row md:gap-0 md:w-4/5 md:m-auto">
        <div className="w-4/5 md:w-2/5">
          <ReactFlagsSelect
            selected={selectedCountry}
            onSelect={(code) => setSelectedCountry(code)}
            searchable
            className="bg-white text-slate-400 rounded-3xl h-10 md:rounded-r-none hover:ring-2 ring-purple-600"
            selectButtonClassName="menu-flags-button h-10 "
          />
        </div>
        <div className="w-4/5">
          <input
            type="text"
            placeholder="Type a movie or serie"
            className=" py-2 px-5 rounded-3xl text-slate-400 w-full md:rounded-l-none md:ml-1 hover:ring-2 ring-purple-600 !outline-none focus:ring-2"
            id="myInput"
            onChange={settingInput}
          />
        </div>
        <button
          className="bg-purple-600 py-2 px-3 rounded-3xl w-4/5 md:ml-5 md:w-1/3 hover:ring-2 ring-purple-300"
          onClick={printCountryAndInput}
        >
          Search
        </button>
      </div>

      <div className="p-5 text-sm hidden md:flex justify-center">
        <span>Not available: </span>
        {notFoundMovies.map((movie) => {
          return <span className="pl-2">{movie.title} |</span>;
        })}
      </div>

      <div className="flex flex-col mt-3 s:w-4/5 md:flex-row md:flex-wrap md:justify-center md:w-full">
        {foundMovies.map((movie) => {
          return (
            <li key={movie.imdbId} className="list-none my-3 m-auto w-4/5 md:w-2/5 lg:w-1/5 lg:m-4">
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
