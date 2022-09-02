import React, {useRef, useState} from 'react';
import Input from './Input';

const MovieForm = ({addMovie}) => {
    const inputRef=useRef();
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');
    

    const validateForm = () => {
      resetErrors();
      let validated=true;
      if(!movieTitle){
        setTitleError('영화제목을 넣어주세요');
        validated=false;
      }
      if(!movieYear){
        setYearError('개봉연도를 넣어주세요');
        validated=false;
      }
      return validated
    }
    const resetErrors = () => {
      setTitleError('');
      setYearError('');
    }
    const onSubmitAddMovie = (e) => {
        e.preventDefault();
        //console.log('영화추가')
        if(validateForm()){
          addMovie(
            {
              id:Date.now(),
              title:movieTitle,
              year: movieYear
            }
         );
         resetErrors();
         setMovieTitle('');
         setMovieYear('');
         inputRef.current.focus();
        }
        
    
       
    
      }
    return (
        <form onSubmit={onSubmitAddMovie}>
            <Input ref={inputRef} type="text" value={movieTitle} placeholder="영화제목" onChange={ e => setMovieTitle(e.target.value)} errorMessage={titleError}/>
           {/*  <div style={{color:'red', fontSize:'12px', marginBottom:'10px'}}>{titleError}</div> */}
            <Input type="number" placeholder='개봉연도' value={movieYear} onChange={ e => setMovieYear(e.target.value)} errorMessage={yearError} />
            {/* <div style={{color: 'red' , fontSize:'12px', marginBottom:'10px'}}>{yearError}</div> */}
            <button type='submit'>영화추가</button>
        </form>
    );
};

export default MovieForm;