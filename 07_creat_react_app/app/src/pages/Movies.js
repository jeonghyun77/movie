import React, {useState} from 'react';

import Movie from "../components/Movie";
import MovieForm from "../components/MovieForm";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const removeMovie = (id) => {
        //console.log(id)
        setMovies(movies.filter((movie) => {
          return movie.id !==id;
        }));
    }
    const upListMovies = movies.length ? movies.map((movie) => {
      return(
        <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />
      )
    }):'추가된 영화가 없습니다. 영화를 추가해주세요';
    const addMovie = (movie) => {
      setMovies([
        ...movies,
        movie
      ]);
    }
    return (
      <>
        <h1>영화 리스트</h1>
        <MovieForm  addMovie={addMovie}/>
        {upListMovies}
  
      </>
    );
};

export default Movies;