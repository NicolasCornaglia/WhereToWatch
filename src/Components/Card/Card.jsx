import React from "react";
import movieExampleResponse from "../../data/moviePoster.json";
import defaultImg from "../../data/img/defaultIMDId.png";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1fbb965758msh507653a9f8a9253p144052jsnfac6f700e136",
    "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
  },
};

const Card = (props) => {
  let movie = { poster: defaultImg, description: "", year: "", rating: "" };

  const fetchPoster = async () => {
    const url = `https://mdblist.p.rapidapi.com/?i=${props.imdbId}`;
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      if (result.length > 1) {
        movie.poster = result.poster;
        movie.description = result.description;
        movie.year = result.year;
        movie.rating = result.ratings[0].value;
        console.log(result);
      }
    } catch (error) {
      console.error(error);
      movie.description = movieExampleResponse.description;
      movie.year = movieExampleResponse.year;
      movie.rating = movieExampleResponse.ratings[0].value;
    }
  };

  fetchPoster();

  // console.log(Object.values(props.streamingInfo)[0]);
  // console.log(props.streamingInfo[0][0].service)

  return (
    <>
      <div className="rounded-md  hover:bg-gradient-to-l hover:from-violet-500 hover:to-fuchsia-500 ">
        <div className="relative group">
          <img
            src={movie.poster}
            alt="poster"
            className="rounded-md p-[2px] "
          />
          <div className="p-3 opacity-0 bottom-0 absolute group-hover:opacity-100 group-hover:bg-opacity-50 group-hover:bg-black transition-all ease-in duration-300">
            <h4>
              <span className="font-bold">Title:</span> {props.title}
            </h4>
            <h3>
              <span className="font-bold">Type:</span> {props.type}
            </h3>
            <p>
              <span className="font-bold">Description:</span>{" "}
              {movie.description}
            </p>
            <p>
              <span className="font-bold">Release Year:</span> {movie.year}
            </p>
            <p>
              <span className="font-bold">IMDB Rating: </span>
              {movie.rating}
            </p>
          </div>
        </div>
        <div className=" p-2 flex justify-center ">
          <a href={props.streamingInfo[0][0].link}>
            <p className="text-black hover:text-white px-3 py-2 rounded-3xl transition-all ease-in duration-300">
              Watch now on {props.streamingInfo[0][0].service}
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
