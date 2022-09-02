import React, {useEffect, useState} from 'react';
import './App.css';
import Timer from './component/Timer.js'

function App() {
  // const [count, setCount] = useState(1)
  // const [name, setName]=useState('')

  // const onClickUpdate = () => {
  //   setCount(count+1);
  // }
  // const inputChange = (e) => {
  //  // console.log(e)
  //  setName(e.target.value)
  // }

  //렌더링 될때마다 매번 실행됨
  /* useEffect(() => {
   console.log('렌더링!!!!');
  });   //렌더링이 매번실행 */
 /*  useEffect(() => {
    console.log('렌더링!!!!');
   }, [name]);   //렌더링이 name만 실행될때 */
  /*  useEffect(() => {
    console.log('렌더링!!!!');
   }, [count]);   //렌더링이 count만 실행될때 */
  /*  useEffect(() => {
    console.log('렌더링!!!!');
   }, []);   //렌더링이 처음 열렸을때만 실행하고 싶을때 */
   const [showTimer, setShowTimer] = useState(false)
  return (
    //Dependency
    //Clean up
    //화면에 첫 렌더링 (Mount), 화면에서 사라질때 (Unmount)
    <div className="App">
      {/* <button onClick={onClickUpdate}>Update</button>
      <span className="cnt">count</span>
      <span>{count}</span>
      <input type='text' value={name} onChange={inputChange} />
      <span>name: {name}</span> */}
      {showTimer && <Timer />}
      <button onClick={ () => {setShowTimer(!showTimer)}}>toggle 콘솔확인</button>


      
    </div>
  );
}

export default App;
