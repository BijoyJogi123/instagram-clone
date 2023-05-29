const Post  = require("../models/Post");
const {validationResult}  = require("express-validator");




const getAllPosts = async (req,res)=>{

    //here i can use a AI and machine learning for post showing to user
    try {
        const post  = await Post.find();
        res.status(200).send(post);
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }

};

const getUserPosts =  async (req,res)=>{

    try {
        const post = await Post.find({user:req.user.id});   
        res.send(post)


    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

const addPost =  async (req,res)=>{

    try {
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(404).json({error:error.array()});
        }
        
        const  {caption,img,location,username} = req.body;

        const post = new Post({
            caption,

            username,

            img,
            
            location,
            
            user:req.user.id
        })

        const savePost = await post.save();

        res.status(201).json(savePost);

    } catch (error) {
        res.status(404).json({ message: err.message });
    }

    
}
const updatePost =  async (req,res)=>{
    
    
    try {
        
        const newPost = {};
        const  {caption,img,location} = req.body;
        const {id} = req.params;
        if(caption){newPost.caption = caption};
        if(img){newPost.img = img};
        if(location){newPost.location = location};
        
        let post = await Post.findById(id);
        
        if(!post){return res.status(404).send("chcek your updatePost")};
    
        // if(post.user.toString()!== post.user.id){
        //     return res.status(401).send("Not allowed garbar in post id and user id");
        // }
    
        post  = await Post.findByIdAndUpdate(id,{$set:newPost},{new:true});
    
        res.json({post});
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    
}
const deletePost =  async (req,res)=>{

    try {

        const {id} = req.params;

        let post = await Post.findById(id);
        
        if(!post){return res.status(404).send("chcek your DeletePost")};
    
        // if(post.user.toString()!== post.user.id){
        //     return res.status(401).send("Not allowed garbar in post id and user id");
        // }
    
        post  = await Post.findByIdAndDelete(id);
    
        res.json({"Succsess":"Post has been Deleted ",post:post});
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }


    
}
const likePost =  async (req,res)=>{


    try {
        const post  = await Post.findById(req.params.id);

      //  res.send(post);


        if(!post.likes.includes(req.params.id)){
            await Post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).send("The post has been liked");
        }
        if(post.likes.includes(req.params.id)){
            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).send("The post has been Disliked");
        }
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}

module.exports = {getAllPosts,getUserPosts,addPost,updatePost,deletePost,likePost};