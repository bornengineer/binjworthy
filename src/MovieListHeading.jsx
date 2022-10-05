import React from "react";
import "./App.css";

const MovieListHeading = (props) => {
    return (
        <div className="mt-4 d-flex flex-row movie-heading">
            <div className="line"></div>
            <h2>{props.heading}</h2>
            <div className="line"></div>
        </div>
    )
}

export default MovieListHeading;