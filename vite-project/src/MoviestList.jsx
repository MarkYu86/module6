import { useState } from "react";
import { AddMovieForm } from "../AddMovieForm";

function Movie({ title, year, synopsis }) {
  return (
    <>
      ({/* no key prop here - only at top level inside .map */}
      <li>
        <h3>{title}</h3> <span>({year})</span>
        <div>{synopsis}</div>
      </li>
      )
    </>
  );
}

function MoviesList() {
  // collection of objects representing movies
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];
  const [movieState, setMovieState] = useState(movies);
  const reverseMovies = () => {
    setMovieState((prevMovies) => [...prevMovies].reverse());
  };

  // add this in MoviesList component
  const handleAddMovie = (newMovie) => {
    newMovie.id = movieState.length + 1; // unreliable but succinct
    setMovieState([...movieState, newMovie]);
  };

  const movieItems = movieState.map((movie) => (
    <Movie
      key={movie.id} // key prop is required for lists
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
    // can also destructure movie into individual props
    // <Movie key={movie.id} {...movie}/>
  ));

  return (
    <div className="MoviesList componentBox">
      <AddMovieForm onAddMovie={handleAddMovie} />
      <button onClick={reverseMovies}>Reverse Order</button>
      <ul>
        {/* iterate over each movie, print the title in a list */}
        <ul>{movieItems}</ul>
      </ul>
    </div>
  );
}
export default MoviesList;
