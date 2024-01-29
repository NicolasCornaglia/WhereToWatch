import React from "react";

const Card = (movie) => {
  return (
    <>
      <div className=" bg-gray-700 p-3">
        <h1>Title: {movie.title}</h1>
        <h2>Score: {movie.title}</h2>
      </div>
    </>
  );
};

export default Card;
