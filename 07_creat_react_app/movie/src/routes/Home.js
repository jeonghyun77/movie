import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.scss';

class Home extends React.Component {
  state = {
    isLoading:true,
    movies: [],
  }

  getMovies = async () => {
    const{
      data: {
        data: {movies},
      },
    }
    =await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');            /* await 기다렸다가 실행하라는 뜻이 있음 */
    // console.log(movies.data.data.movies)                           /* --> 이렇게 하면 데이터만 불려서 나옴. */
    this.setState({movies, isLoading: false})   /* 진짜 로딩이 되면 We are ready를 불러오게끔  */ /* 같은이름은 한번만 써도 됨. */
  }
  componentDidMount(){
    this.getMovies();
  }
  render() {                                 /* render는 통솔적으로 보여달라는 뜻 */
  const {isLoading, movies}=this.state;
    return (

      <section className='container'>
        {isLoading ? (<div className='loader'>
          <span className='loader_text'>'Loading...' </span>
          </div>) : (
             <div className='movies'>
               {movies.map((movie) => (
               <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />  /* 반복하니까 key값이 필요 */
               ))}
             </div>
             )
        }
      </section>
    );
  }
}

export default Home;