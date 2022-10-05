import React from "react";
import "./App.css";

const MovieCard = (props) =>{
    const FavoriteComponent = props.favoriteComponent;
    return(
        <div className="movie mx-3 d-flex flex-column">
            <div>
                <p>{props.movie1.Year}</p>
            </div>         
            <div className="">
                <img className="poster"
                src = {props.movie1.Poster !== 'N/A' ? props.movie1.Poster : 'https://via.placeholder.com/500'}
                alt = {props.movie1.Title + " Poster"}
                />
            </div>
            <div>
                <span>{props.movie1.Type}</span>
                <h3>{props.movie1.Title}</h3>
            </div>
            <div className="fav d-flex justify-content-center align-items-center">
                <FavoriteComponent/>
            </div>
        </div>
    );
};

export default MovieCard;