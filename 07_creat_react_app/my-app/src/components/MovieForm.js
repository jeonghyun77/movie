import React, {useState} from 'react';

const MovieForm = ({addMovie}) => {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titileError, setTitileError] = useState('');
    const [yearError, setYearError] = useState('');

    const resetForm = () => {
        setMovieTitle('');
        setMovieYear('');
    }
    const validateForm = () =>{
        resetErrors();
        let validated= true;
        if(!movieTitle){
            setTitileError('영화 제목을 입력하세요.')
            validated= false;
        }
        if(!movieYear){
            setYearError('개봉연도를 입력하세요.')
            validated= false;
        }
        return validated
    }
    const resetErrors = () =>{
        setTitileError('');
        setYearError('');
    }
    const onSubmitfn = (e) =>{
        e.preventDefault();
       /*  setMovies([
          ...movies,
          {
            title:movieTitle,
            year:movieYear
          }
        ]); */
      if(validateForm()){
        addMovie({
            id:Date.now,
            title:movieTitle,
            year:movieYear
        });
        resetErrors()
       resetForm()
      }

      }
      
    return (
        <form onSubmit={onSubmitfn}>
            <input className='input' type="text" placeholder='영화제목' value={movieTitle} onChange={(e) => {setMovieTitle(e.target.value)}}/>
            <div style={{color:'red', fontSize:'12px', textAlign:'left', marginBottom:'5px'}}>{titileError}</div>
            <input className='input' type="text" placeholder='개봉연도' value={movieYear}  onChange={(e) => {setMovieYear(e.target.value)}}/>
            <div style={{color:'red', fontSize:'12px',textAlign:'left', marginBottom:'5px'}}>{yearError}</div>
            <button type='submit'className='button' >영화추가</button>
        </form>
    );
};

export default MovieForm;