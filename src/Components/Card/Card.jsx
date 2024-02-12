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

  let streamingServices = [];
  props.streamingInfo.forEach(movie => {
    return streamingServices.push({service: movie.service, link: movie.link});
  });
  console.log(streamingServices)


  return (
    <>
      <div className="rounded-md bg-slate-900">
        <img src={moviePoster.poster} alt="poster" className="rounded-md" />
        <div className="p-3 hidden">
          <h4>Title: {props.title}</h4>
          <h3>Type: {props.type}</h3>
          <p>Description: {moviePoster.description}</p>
          <p>Release Year: {moviePoster.year}</p>
          <p>IMDB Rating: {moviePoster.ratings[0].value}</p>
          <p>IMDB ID: {props.imdbId}</p>
        </div>
        <div>
          <div>Watch now on: {props.streamingInfo[0][0].service}<svg xmlns="http://www.w3.org/2000/svg" width="1.11em" height="1em" viewBox="0 0 300 299"><path fill="currentColor" d="M66 0h126c24.732 0 52.692-1.663 70 6v1h2v1h2l1 2l4 1l2 3h2l4 5l7 6v2l2 1l1 3h1l1 4h1l2 6h1v3h1v4h1v4h1l1 20c2.827 16.832 1 48.043 1 70v55c0 10.055.132 24.436-1 30v14l-4 17h-1l-2 6h-1v2h-1l-1 4l-3 2v2l-7 6l-5 6c-23.682 16.753-66.749 13-107 13H90c-13.969 0-28.551.478-39-3h-4v-1h-3v-1h-3v-1h-3v-1h-2v-1h-2l-1-2l-4-1l-1-2h-2l-7-8l-5-4v-2l-3-2l-1-4H9v-2H8l-2-6H5l-1-6H3v-5H2v-6H1v-14c-1.446-5.837-1-22.389-1-33v-64c0-17.319-2.041-46.044 1-58V58l4-17h1l2-6h1v-2h1l1-4l3-2C21.784 16.014 30.533 9.293 44 4l12-2V1c3.519-1.042 7.72.976 10-1m44 104c-10.582.3-18.236 9.745-19 20a10.6 10.6 0 0 0 4 1v-1l5-1v-1h2c3.9-2.632 7.734-11.4 8-18m41 26h-10v9c2.437.918 6.193 1.037 10 1c-.235 11.1-1.69 26.724 1 36l1 10h1c1.431 1.858 1.232 2.274 4 3c3.008 3.052 12.027 2.113 18 2v-11h-1c-2.3 2.16-6.025.377-9 0c-2.029-11.356-1.013-26.986-1-40h11v-10h-11v-18c-3.1-1.163-8.434-1.046-13-1c-1.689 4.538-1.05 12.853-1 19m-27 7l-1-4c-3.6-1.763-11.523-7.864-18-6l-11 4c-6.079.565-7.329-1.847-11-3c-11.333-3.56-22.53 7.311-25 13v3h-1l-1 15h1v5h1v4h1v3h1v2h1l1 5l2 1l1 4l3 2v2l4 3v1h2l1 2h8c1.688-1.927 11.011-4.779 16-3v1h2v1h3v1c3.33 1.054 6.757-.626 9-1l5-6h1v-2l3-2l2-6h1l2-6h-1l-7-5v-2l-2-1v-3h-1v-3h-1c-2.111-6.909 3.971-15.733 7-18v-1zm103-7l-14 46c-1.139-1.139-.4 0-1-2h-1l-2-10h-1v-3h-1v-3h-1v-3h-1v-3h-1v-3h-1v-3h-1v-3h-1v-4c-1.008-2.8-2.559-5.095-3-9h-15v1h1l1 5h1v3h1v3h1v3h1v3h1v2h1l2 9h1l1 6h1v2h1v3h1v3h1v3h1v3h1v2h1v3h1l1 6h1c2.167 1.987 10.054 1.1 14 1l22-61z" class="cls-1"/></svg></div>
        </div>
      </div>
    </>
  );
};

export default Card;
