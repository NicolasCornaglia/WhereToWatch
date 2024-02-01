
import React, { useState, useEffect } from "react";
import MoviesList from "../MoviesList/MoviesList";
import ReactFlagsSelect from 'react-flags-select';
import moviesAPIResult from '../../data/movies.json'

const SearchBar = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

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
          className="my-5 mr-2 py-2 px-3 rounded-r-3xl w-1/3"
        />
        <button className="bg-purple-600 m-15 py-2 px-3 rounded-3xl" onClick={console.log(selectedCountry)}>
          Search
        </button>
      </div>

      <div className="flex flex-col">
        <div className="m-6 p-4 bg-purple-600 rounded-md">
          <h1 className="flex justify-center">
            {" "}
            Available on Streaming Service Name
          </h1>
          <div className="flex flex-wrap m-3 justify-evenly">
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2"
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
          </div>
        </div>

        <div className="m-6 p-4 bg-purple-600 rounded-md">
          <h1 className="flex justify-center">
            {" "}
            Available on Streaming Service Name
          </h1>
          <div className="flex flex-wrap m-3 justify-evenly">
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2"
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
            <div
              id="card"
              className="rounded-md w-1/6 bg-black p-2  flex flex-col text-center m-2 "
            >
              <h4>Title:</h4>
              <h4>Type:</h4>
              <h4>Year:</h4>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now!
              </a>
            </div>
          </div>
        </div>

        {/* <MoviesList movies={movies}/> */}
      </div>
    </>
  );
};

export default SearchBar;
