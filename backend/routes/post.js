const express = require("express");
const router = express.Router();
const verifyToken =  require("../middleware/verifyToken")

//const {body, validationResult}  = require("express-validator"); you can use ot latter onn

const {getAllPosts,getUserPosts,addPost,updatePost,deletePost,likePost} = require("../controller/post");




//read posts

router.get("/allposts",verifyToken,getAllPosts);
router.get("/:userId/posts",verifyToken,getUserPosts);




//Add post

router.post("/",verifyToken,addPost);

//update post
router.put("/:id/updatepost",verifyToken,updatePost);


//delete post
router.delete("/:id/deletepost/",verifyToken,deletePost);

//like post

router.put("/:id/like",verifyToken,likePost);


module.exports = router;