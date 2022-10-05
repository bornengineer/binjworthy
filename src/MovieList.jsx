import React from "react";
import MovieListHeading from "./MovieListHeading";
import "./App.css";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
    const FavComp = props.favoriteComponent;
    return (
        <>
        {props.movie1?.length > 0
                ? ( 
                    <div className="movie-app">
                        <div className="d-flex justify-content-center flex-wrap flex-row">
                            <MovieListHeading heading = {props.heading}/>
                        </div>
                        <div className="d-flex  justify-content-center flex-wrap flex-row mt-2">
                            {props.movie1.map((movie, index) => (
                                <MovieCard movie1 = {movie} favoriteComponent={FavComp}/>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className = "NotFound d-flex justify-content-center align-items-center">
                        <h2>No Movies Found... <br/> try searching with a different keyword</h2>
                    </div>
                )
        }
        </>
    )
}

export default MovieList;