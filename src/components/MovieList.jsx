import React from "react";
import "../App.css";
import MovieListHeading from "./MovieListHeading";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <>
      <div className="movie-app">
        <div className="d-flex justify-content-center flex-wrap flex-row">
          <MovieListHeading heading={props.heading} />
        </div>
        {props.movie1?.length > 0 ? (
          <div className="d-flex  justify-content-center flex-wrap flex-row mt-2">
            {props.movie1.map((movie, index) => (
              <MovieCard
                movie1={movie}
                add={props.add}
                remove={props.remove}
                isFav = {props.isFav}

                addWatch = {props.addWatch}
                removeWatch = {props.removeWatch}
                isWatch = {props.isWatch}
              />
            ))}
          </div>
        ) : (
          <div className="NotFound ">
            <h2 className="d-block">
              {props.notFound1}
            </h2>
            <br/>
            <h2 className="d-block">
              {props.notFound2}
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieList;
