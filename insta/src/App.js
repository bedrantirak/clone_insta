import React from 'react'
import './App.css';
import Post from './Post';

function App() {
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

    <Post username="bedrantirak" caption="Amazing insta day." imageUrl="https://prnt.sc/vtf22e" />
    <Post />
    <Post />
    <Post />
     {/* Posts */}
     {/* Posts */}
    </div>
  );
}

export default App;
