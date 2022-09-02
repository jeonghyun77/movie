import React, {useState} from 'react';
import './App.css';


const heavyWork = () => {
  console.log('무거운 작업');
  return ['오정현', '강경민'];
}
  function App() {
    const [timer, setTimer] =useState(1);
    const [names, setNames] = useState(() => {return heavyWork()});
    const [input, setInput] =useState ('');


    const onClickFn = () => {
      let newTime;
      if(timer >=12){
        newTime=1;
      }else{
        newTime=timer+1;
      }
      setTimer(newTime);
      //setTimer(timer+1);
    }
    // console.log('렌더링!!')
    const inputChange = (e) => {
      setInput(e.target.value);
    }
    //console.log(input)
  /* const [username, setUsername] = useState('');
  const [userpass, setpass] = useState('');
   const onSubmit = (e) => {
    e.preventDefalut();
    console.log(username, userpass);
    setUsername('');
    setpass('');
   }
   console.log('렌더링') */
/*   const [text, setText]= useState('jee');
  const updateText = () => {
    setText('hyun'); 
    console.lof(text)
  }

  const onsubmit = () => {
    alert('submit 입니다.')
  }
  const onKeyUp = (event) =>{
    console.log(event)
    if(event.keyCode===68){
      onsubmit();
    }
  } */
  const handleUpload = () => {
    setNames((prevState) => {
      console.log('이전 state', prevState)
      return [input,...prevState];
    });
    setInput('')
  }
  return (
    <div className="App">
      {/* <input onKeyUp={onKeyUp}/>
      <button onClick={onsubmit}>submit</button>   
      <br />
      <br />
      <span>{text}</span>
      <button onClick={updateText}>upDate</button> */}

    {/*   <form onSubmit={onSubmit}>
        <input placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input placeholder='Password' value={userpass} onChange={(e) => setpass(e.target.value)}/>
        <button type='submit'>submit</button>
      </form> */}

      <span>현재시각: {timer} 시</span>
      <button onClick={onClickFn}>Update</button>

      <br />
      <hr />
      <input type='text' value={input} onChange={inputChange}/>
      <button onClick={handleUpload}>upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>
      })}
    </div>
  );
}

export default App;
