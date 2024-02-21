import Card from "../Card/Card";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
// import moviesAPIResult2 from "../../data/movies.json";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1fbb965758msh507653a9f8a9253p144052jsnfac6f700e136",
    "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
  },
};

const SearchBar = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [input, setInput] = useState("");
  const [foundMovies, setFoundMovies] = useState([]);
  const [notFoundMovies, setNotFoundMovies] = useState([]);

  const printCountryAndInput = () => {
    console.log(selectedCountry, input);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://streaming-availability.p.rapidapi.com/search/title?title=${input}&country=${selectedCountry}&show_type=all&output_language=en`,
        options
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      // Filter the movies that you get to have streaming info
      let foundMovies = [];
      let notFoundMovies = [];
      responseData.result.map((el) => {
        if (Object.keys(el.streamingInfo).length !== 0) {
          return foundMovies.push({
            title: el.title,
            streamingInfo: el.streamingInfo,
            imdbId: el.imdbId,
            type: el.type,
          });
        } else {
          return notFoundMovies.push({
            title: el.title,
            streamingInfo: `Not available in ${selectedCountry}`,
            imdbId: el.imdbId,
            type: el.type,
          });
        }
      });
      setFoundMovies(foundMovies);
      setNotFoundMovies(notFoundMovies);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleRefresh = async () => {
    printCountryAndInput();
    await fetchData();
  };


  // console.log(foundMovies);
  // console.log(notFoundMovies);

  return (
    <>
      <div className="flex flex-col justify-between items-center gap-3 md:flex-row md:gap-0 md:w-4/5 md:m-auto max-w-[1000px]">
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
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          className="bg-purple-600 py-2 px-3 rounded-3xl w-4/5 md:ml-5 md:w-1/3 hover:ring-2 ring-purple-100"
          onClick={handleRefresh}
        >
          Search
        </button>
      </div>

      {foundMovies.length > 0 && (
        <div className="flex flex-col mt-10 s:w-4/5 md:flex-row md:flex-wrap md:justify-center md:w-full">
          {foundMovies.map((movie) => {
            return (
              <li
                key={movie.imdbId}
                className="list-none my-3 m-auto w-4/5 md:w-2/5 lg:w-1/6 lg:m-4 rounded-md max-w-[300px]"
              >
                <Card
                  title={movie.title}
                  streamingInfo={Object.values(movie.streamingInfo)}
                  imdbId={movie.imdbId}
                  type={movie.type}
                  country={selectedCountry}
                  key={movie.imdbId}
                />
              </li>
            );
          })}
        </div>
      )}

      {notFoundMovies.length > 0 && (
        <div className="p-5 text-sm hidden md:flex justify-center">
          <span>Not available: </span>
          {notFoundMovies.map((movie) => {
            return <span className="pl-2">{movie.title} |</span>;
          })}
        </div>
      )}
    </>
  );
};

export default SearchBar;
