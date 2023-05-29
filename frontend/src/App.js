import './App.css';
import Home from './Homepage/Home';
import Login from './Loginpage/Login'
import Signup from './Signup/Signup';
import Followingpage from './Followingpage/Followingpage';
import UpdateProfile from './UpdateProfile/UpdateProfile';
import { useSelector,} from 'react-redux';
import React, { useState, useEffect } from 'react'


import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Profile from './Profile/Profile';

function App() {

  const json = useSelector(state => state);
 

  // console.log("This is the state",json);



  const [user, setUser] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    return storedUser || {};
  });



  const setUserState = (user1) => {
    console.log("here is the user data under function:- ", user1);
  
    setUser({
      id: user1._id,
      username: user1.username,
      email: user1.email,
      full_name: user1.full_name,
      friends: user1.friends,
      profilePicture: user1.profilePicture,
      followers: user1.followers
    });
  
    console.log(user ? "data is coming" : "user data not coming");
  };
  



  useEffect(() => {
    
    if (json.getUser_Reducer.user) {
     
      setUserState(json.getUser_Reducer.user);
    }
    if(json.updateUser_Reducer.updated_user.user){
      setUserState(json.updateUser_Reducer.updated_user.user);
      console.log("This is my updated data:-----",user)
    }
  }, [json.getUser_Reducer.user,json.updateUser_Reducer.updated_user.user]);




  return (
    <>
    
      <BrowserRouter >
     
            
            
        <Routes>
        <Route path="/following" element={<Followingpage user={user}/>}/>
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile user={user}/>} />
        <Route exact path="update" element={<UpdateProfile user={user}/>}/>

        </Routes>

     
        
     
      </BrowserRouter>
      
      </>
  );
}

export default App;
