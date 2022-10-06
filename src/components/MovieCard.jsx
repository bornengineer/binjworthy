import React from "react";
import "../App.css";
import AddToFav from "./AddToFav";
import RemoveFav from "./RemoveFav";

const MovieCard = (props) =>{
    const add = props.add;
    const remove = props.remove;
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
            {props.isFav(props.movie1)
                ?(
                <div onClick={() => remove(props.movie1)} className="fav d-flex justify-content-center align-items-center">
                <RemoveFav/>
                </div>
                )
                :(
                    <div onClick={() => add(props.movie1)} className="fav d-flex justify-content-center align-items-center">
                    <AddToFav/>
                    </div>
                )

            }
        </div>
    );
};

export default MovieCard;