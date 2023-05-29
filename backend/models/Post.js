const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'

    },
    username:{

        type:String,
    },
    caption :{
        type:String,
        max:500,
    },
    img:{
        type:String,
    },
    likes: {
        type: Array,
        default: [],
      },
   
    location: String,
    


    comments: {
      type: Array,
      default: [],
    },

 



}
, {timestamps:true});

module.exports = mongoose.model("Post",PostSchema);
 