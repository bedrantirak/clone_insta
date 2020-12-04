import React, { useState,useEffect } from 'react'
import './App.css';
import Post from './Post';
import {db} from "./firebase"
import { Button, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));




function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts,setPosts] = useState([]);
  const [open,setOpen] = useState(false);

  //useEffect => exp: run code when page refreshes. runs a piece of code based on a specific condition
  
  useEffect(()=>{
  db.collection('posts').onSnapshot(snapshot =>{
    setPosts(snapshot.docs.map(doc => ({
      id: doc.id,
      post: doc.data()
    })))
  })
  //everytime a new post added
},[]);

const signUp = (event) =>{

}

  return (
    <div className="App">
    
     <Modal
     open={open}
     onClose={()=> setOpen(false)}

     >
      <div style={modalStyle} className={classes.paper}>
      <h2>Text in a modal</h2>
     
      </div>
     </Modal>


    <div className="app__header">
      <img className="app__headerImage"
      src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
      alt="insta_logo"
      />
    </div>

    <Button onClick={()=> setOpen(true)}>Sign Up</Button>

    <h1>Clone Insta</h1>
      {
        posts.map(({id, post}) =>(
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
   
    
    </div>
  );
}

export default App;
