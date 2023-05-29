const express = require( 'express');
const route = express.Router();
const user = require('../controller/user.js');
const  verifyTokens  = require("../middleware/verifyToken");
// const multer = require('multer');

// // Define the storage settings for multer
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'public/uploads');
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     }
//   });



  
// Create a middleware using multer to handle the file upload
// const upload = multer({ storage: storage });



const {getUser,getAllUser,getUserFriends,updateUser,followUser,unfollowUser}  = user;

//READ data users

route.get("/",verifyTokens,getAllUser);

route.get("/:id",verifyTokens,getUser);
// route.get("/allusers",verifyTokens,allUsers);
route.get("/:id/friends",verifyTokens,getUserFriends);


//UPDATE user data
route.put("/update/:id",verifyTokens,updateUser);

//follow and unfollow the  user

route.put("/:id/follow",verifyTokens,followUser);
route.put("/:id/unfollow",verifyTokens,unfollowUser);



module.exports = route;