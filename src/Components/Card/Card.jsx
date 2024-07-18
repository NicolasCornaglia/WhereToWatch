import React from "react";
import defaultImg from "../../data/img/defaultIMDId.png";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "mdblist.p.rapidapi.com",
  },
};

const Card = (props) => {
  let local_error = [];
  let movie = { poster: defaultImg, description: "description", year: "0000", rating: "9.9" };

  if (props.imdbId !== '') {
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
        local_error.push(error);
        console.error(error);
      }
    }

    if (local_error.length < 1) {
      fetchPoster();
    }
  }

  return (
    <>
      {local_error.length === 0 &&

        <div key={props.poster} className="pb-3 rounded-md bg-gradient-to-l from-violet-500 to-fuchsia-500 ">
          <div className="relative group px-3 py-2">
            <h1 className="text-lg font-bold">{props.title}</h1>
            <h2>Content: {props.type}</h2>
            {movie.length > 0 &&
              <div>
              <img
                src={movie.poster}
                alt="poster"
                className="rounded-md p-[2px] "></img>

              <h4>Rating: {movie.rating}  Year: {movie.year}</h4>
              <p>{movie.description}</p>
              </div>
          }
          </div>
          {props.streamingInfo[0].map((streamingService) => {
            return (          
              <div key={streamingService.availableSince+streamingService.videoLink} className=" p-2 flex justify-center ">
                <a href={streamingService.link} rel="noreferrer" target="_blank">
                  <p className="text-black text-base hover:text-white hover:bg-black px-5 py-2 rounded-3xl transition-all ease-in duration-300 border border-black">
                    Watch now on {streamingService.service}
                  </p>
                </a>
              </div>
            )
          })  
          }
          
        </div>
      }
    </>
  );
};

export default Card;
