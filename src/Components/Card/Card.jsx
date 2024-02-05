import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="bg-gray-700 p-3 m-4 rounded-md" >
        <h1>Title: {props.title}</h1>
        <h2>IMDB ID: {props.imdbId}</h2>
        <h3>Streaming Service:</h3>
      </div>
    </>
  );
};

export default Card;
