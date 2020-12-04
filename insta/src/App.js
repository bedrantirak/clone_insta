import React, { useState,useEffect } from 'react'
import './App.css';
import Post from './Post';
import {db, auth} from "./firebase"
import { Button, Modal, Input} from '@material-ui/core';
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

  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  
  const [user, setUser] = useState(null);
  //useEffect => exp: run code when page refreshes. runs a piece of code based on a specific condition
   
  useEffect(()=>{
  const unsubscribe = auth.onAuthStateChanged((authUser)=>{
    
    if(authUser){
       //user has logged in
       console.log(authUser);
       setUser(authUser);}
     
     else{
       //user has logged out
       setUser(null);
     }
   })

   return () =>{
     // perform some cleanup actions
    unsubscribe();
   } 
  },[user, username]);


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
   event.preventDefault();
   auth.createUserWithEmailAndPassword(email, password)
   .then((authUser)=>{
    return authUser.user.updateProfile({
       displayName: username
     })
   })
   .catch((error)=> alert(error.message));

}

  return (
    <div className="App">
    
     <Modal
     open={open}
     onClose={()=> setOpen(false)}

     >
      <div style={modalStyle} className={classes.paper}>
     <form className="app__signup" >
     <center>
      <img className="app__headerImage"
      src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
      alt="insta_logo"
      />
       </center>
      <Input type="text"
      placeholder="username"
      value={username}
      onChange= {(e) => setUsername(e.target.value)}
      />
      <Input type="text"
      placeholder="email"
      value={email}
      onChange= {(e) => setEmail(e.target.value)}
      />
      <Input type="password"
      placeholder="password"
      value={password}
      onChange= {(e) => setPassword(e.target.value)}
      />
      <Button type="submit" onClick={signUp}>Sign Up</Button>
     
     </form>
    
       
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
