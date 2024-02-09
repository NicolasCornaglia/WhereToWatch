import React from "react";
import moviePoster from "../../data/moviePoster.json";

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1fbb965758msh507653a9f8a9253p144052jsnfac6f700e136',
// 		'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
// 	}
// };

const Card = (props) => {
  // const url = 'https://mdblist.p.rapidapi.com/?i=tt0073195';

  // try {
  //   const response = await fetch(url, options);
  //   const result = await response.text();
  //   console.log(result);
  // } catch (error) {
  //   console.error(error);
  // }

  // console.log(Object.values(props.streamingInfo)[0]);
  // console.log(props.streamingInfo[0][0].service)
  return (
    <>
      <div className="rounded-md bg-slate-900">
        <img src={moviePoster.poster} alt="poster" className="rounded-md"/>
        <div className="p-3">
          <h4>Title: {props.title}</h4>
          <h3>Type: {props.type}</h3>
          <p>Description: {moviePoster.description}</p>
          <p>Release Year: {moviePoster.year}</p>
          <p>IMDB Rating: {moviePoster.ratings[0].value}</p>
          <p>IMDB ID: {props.imdbId}</p>
          <div>Watch now on: {props.streamingInfo[0][0].service}</div>
          
        </div>
      </div>
    </>
  );
};

export default Card;
