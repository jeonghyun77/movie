import React, {useState} from 'react';
import './App.css';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm'

function App() {
  
  const [movies, setMovies]=useState([
    {id: Date.now(), title: '바람과 함께 사라지다', year:2022 },
    {id: Date.now(), title: '빙의', year:2021 },
    {id: Date.now(), title: '설빙', year:2020 },
    {id: Date.now(), title: '한산', year:2022 },
    {id: Date.now(), title: '헌트', year:2021 },
    {id: Date.now(), title: '놉', year:2020 },
    {id: Date.now(), title: '탑건', year:2022 },

  ])
 

  const renderMovies = movies.map((movie) => {
    return(
      <Movie movie={movie} key={movie.title} />
    )
  })
  
  const addMovie = (movie) =>{
    setMovies([
        ...movies,
        movie
      ]);
  }
  return (
    <div className="App">
      <h1>Movis List</h1>
      <MovieForm addMovie = {addMovie}/>
      {renderMovies}
    </div>
  );
}

export default App;