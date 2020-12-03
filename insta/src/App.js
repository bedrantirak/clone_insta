import React, { useState,useEffect } from 'react'
import './App.css';
import Post from './Post';
import {db} from "./firebase"


function App() {
  const [posts,setPosts] = useState([
    {
      username:"bedrantirak",
      caption:"Amazing insta day.",
     imageUrl:"https://www.linkpicture.com/q/pexels-amit-kumar-2215380.jpg"
    },
    {
      username:"hascatrk",
      caption:"Amazing insta day.",
     imageUrl:"https://www.linkpicture.com/q/pexels-amit-kumar-2215380.jpg"
    }
  ]);

  //useEffect => exp: run code when page refreshes. runs a piece of code based on a specific condition
  
  useEffect(()=>{
  db.collection('posts').onSnapshot(snapshot =>{
    setPosts(snapshot.docs.map(doc => doc.data()))
  })
  //everytime a new post added
},[]);

  return (
    <div className="App">
     {/* header */}
    <div className="app__header">
      <img className="app__headerImage"
      src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
      alt="insta_logo"
      />
    </div>
    <h1>Clone Insta</h1>
      {
        posts.map(post =>(
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
   
    
    </div>
  );
}

export default App;
