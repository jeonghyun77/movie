import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
   /*  axios({
      method:'GET',
      url:'https://jsonplaceholder.typicode.com/posts'
    }).then(response => setPosts(response.data)) */
    axios.get('https://jsonplaceholder.typicode.com/photos').then(response => setPosts(response.data))


  })

  return (
    <div className="App">
      <h2>axios데이터 받아오기</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <div>{post.title}</div>
            <div>{post.url}</div>
            <div><img src={post.thumbnailUrl} alt={post.title} /></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
