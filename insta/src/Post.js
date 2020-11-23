import React from 'react'
import "./Post.css"

function Post() {
    return (
        <div className="post">
            <h3>Username</h3>
      {/* header => avatar + usernama */}
       
       <img className="post__image" src="https://www.linkpicture.com/q/pexels-omkar-patyane-238480.jpg" alt="ss"/>
       {/* image */}
       
       <h4 className="post__text">Username: Caption</h4>
       {/* username + caption */}
        </div>
    )
}

export default Post
