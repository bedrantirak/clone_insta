import React from 'react'
import "./Post.css"
import Avatar from "@material-ui/core/Avatar"

function Post() {
    return (
        <div className="post">
            <Avatar 
            className="post__avatar"
            alt="bedrantirak"
            src="/static/images/avatar/1.jpg"
            />
            <h3>Username</h3>
      {/* header => avatar + usernama */}
       
       <img className="post__image" src="https://www.linkpicture.com/q/pexels-omkar-patyane-238480.jpg" alt="ss"/>
       {/* image */}
       
       <h4 className="post__text"><strong>bedrantirak</strong> happy insta day.. </h4>
       {/* username + caption */}
        </div>
    )
}

export default Post
