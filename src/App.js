import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import searchIcon from "./search.svg";
import MovieList from "./components/MovieList";
// 9f6bb9f3

const API_URL = "http://www.omdbapi.com?apikey=9f6bb9f3";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  const [SearchTitle, setSearchTitle] = useState("");

  const [movies, setMovies] = useState([]);

  const [LoadMovies] = useState([
    {
      Title: "House of the Dragon",
      Year: "2022–",
      imdbID: "tt11198330",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDBkZjRiNGMtZGU2My00ODdkLWI0MGYtNGU4MmJjN2MzOTkxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "Breaking Bad",
      Year: "2008–2013",
      imdbID: "tt0903747",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDkyZThhNmMtZDBjYS00NDBmLTlkMjgtNWM2ZWYzZDQxZWU1XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg",
    },
    {
      Title: "Mirzapur",
      Year: "2018–",
      imdbID: "tt6473300",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2NlNGYwYTUtMTczMi00NGVjLTgwMzUtNjBkZjIyNDc2NjcxXkEyXkFqcGdeQXVyODQ5NDUwMDk@._V1_SX300.jpg",
    },
    {
      Title: "Spider-Man",
      Year: "2002",
      imdbID: "tt0145487",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    },
    {
      Title: "Game of Thrones",
      Year: "2011–2019",
      imdbID: "tt0944947",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg",
    },
    {
      Title: "Mindhunter",
      Year: "2017–2019",
      imdbID: "tt5290382",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWNmYzQ1ZWUtYTQ3ZS00Y2UwLTlkMDctZThlOTJkMGJiNzBiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg",
    },
    {
      Title: "Vikram Vedha",
      Year: "2017",
      imdbID: "tt6148156",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BY2FiMTFmMzMtZDI2ZC00NDQyLWExYTUtOWNmZWM1ZDg5YjVjXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_SX300.jpg",
    },
    {
      Title: "Vikings",
      Year: "2013–2020",
      imdbID: "tt2306299",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    },
    {
      Title: "Baahubali: The Beginning",
      Year: "2015",
      imdbID: "tt2631186",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1MmItYjU1MDY5ZDdhMTU3XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_SX300.jpg",
    },
    {
      Title: "Dark",
      Year: "2017–2020",
      imdbID: "tt5753856",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_SX300.jpg",
    },
    {
      Title: "The Dark Knight",
      Year: "2008",
      imdbID: "tt0468569",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    },
    {
      Title: "3 Idiots",
      Year: "2009",
      imdbID: "tt1187043",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      Title: "Rick and Morty",
      Year: "2013–",
      imdbID: "tt2861424",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Vivarium",
      Year: "2019",
      imdbID: "tt8368406",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmEyZGQyMmItZTdjMC00YmZhLTk4YjUtNzkzZDc2NDYyMGMxXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg",
    },
  ]);

  const [Favourites, setFavourites] = useState([]);

  const [Watchlist, setWatchlist] = useState([
    {
      Title: "House of the Dragon",
      Year: "2022–",
      imdbID: "tt11198330",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDBkZjRiNGMtZGU2My00ODdkLWI0MGYtNGU4MmJjN2MzOTkxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
    }
  ]);

  useEffect(() => {
    searchMovies(SearchTitle);
  }, [SearchTitle]);

  useEffect(() => {
    const favMovieFromLocal = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );
    const watchMovieFromLocal = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );
    setFavourites(favMovieFromLocal);
    setFavourites(watchMovieFromLocal);
  }, []);

  const saveFavToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };
  const saveWatchlistToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-watchlist', JSON.stringify(items));
  }

  function isFavEmpty() {
    return Favourites?.length === 0;
  }

  function isWatchlistEmpty() {
    return Watchlist?.length === 0;
  }

  function addFavorite(movie) {
    if (!isFavEmpty()) {
      const temp = Favourites.filter(
        (favourite) => favourite.imdbID === movie.imdbID
      );
      if (temp?.length > 0)
        return;
    }
    const newFavourites = [...Favourites, movie];
    setFavourites(newFavourites);
    saveFavToLocalStorage(newFavourites);
  }

  function addWatchlist(movie) {
    if (!isWatchlistEmpty()) {
      const temp = Watchlist.filter(
        (watchlist) => watchlist.imdbID === movie.imdbID
      );
      if (temp?.length > 0)
        return;
    }
    const newWatchlist = [...Watchlist, movie];
    setWatchlist(newWatchlist);
    saveWatchlistToLocalStorage(newWatchlist);
  }

  const RemoveFavoriteMovie = (movie) => {
    if(isFavEmpty())return;
    const newFavourites = Favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavourites);
    saveFavToLocalStorage(newFavourites);
  };

  const RemoveWatchlistMovie = (movie) => {
    if(isWatchlistEmpty())return;
    const newWatchlist = Watchlist.filter(
      (watchlist) => watchlist.imdbID !== movie.imdbID
    );
    setWatchlist(newWatchlist);
    saveWatchlistToLocalStorage(newWatchlist);
  };

  const isFavorite = (movie) => {
    if(isFavEmpty())return false;
    const temp = Favourites.filter(
      (favourite) => favourite.imdbID === movie.imdbID
    );
    if(temp.length > 0)return true;
  };

  const isWatchlistMovie = (movie) => {
    if(isWatchlistEmpty())return false;
    const temp = Watchlist.filter(
      (watchlist) => watchlist.imdbID === movie.imdbID
    );
    if(temp.length > 0)return true;
  };

  let searchT;
  return (
    <div className="app">
      <div className="navbar fixed-top">
        <div className="col-11 container-fluid d-flex justify-content-lg-between aling-items-center justify-content-center flex-sm-col">
          <h1 onClick={() => setSearchTitle("")}>MovieWorld</h1>
          <div className="search">
            <input
              placeholder="Search movies and TV shows"
              value={SearchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
            />
            <img
              src={searchIcon}
              alt="search"
              onClick={() => {
                searchT = SearchTitle;
                searchMovies(searchT);
                console.log(searchT);
              }}
            />
          </div>
        </div>
      </div>
      {SearchTitle === "" ? (
        <MovieList
          movie1={LoadMovies}
          heading="Explore"
          
          add={addFavorite}
          remove={RemoveFavoriteMovie}
          isFav={isFavorite}

          addWatch={addWatchlist}
          removeWatch={RemoveWatchlistMovie}
          isWatch={isWatchlistMovie}

        />
      ) : (
        <MovieList
          movie1={movies}
          heading="Search results"
          add={addFavorite}
          remove={RemoveFavoriteMovie}
          isFav={isFavorite}

          addWatch={addWatchlist}
          removeWatch={RemoveWatchlistMovie}
          isWatch={isWatchlistMovie}

          notFound1="No movies found..."
          notFound2="try searching with a different keyword"
        />
      )}
      <MovieList
        movie1={Favourites}
        heading="Favourites"
        add={addFavorite}
        remove={RemoveFavoriteMovie}
        isFav={isFavorite}

        addWatch={addWatchlist}
        removeWatch={RemoveWatchlistMovie}
        isWatch={isWatchlistMovie}

        notFound1="No favourites added"
        notFound2="try adding some movies"
      />
      <MovieList
        movie1={Watchlist}
        heading="Watchlist"

        add={addFavorite}
        remove={RemoveFavoriteMovie}
        isFav={isFavorite}

        addWatch={addWatchlist}
        removeWatch={RemoveWatchlistMovie}
        isWatch={isWatchlistMovie}

        notFound1="No movies added to watchlist"
        notFound2="try adding some movies"
      />
    </div>
  );
};

export default App;
