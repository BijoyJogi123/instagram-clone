import {combineReducers} from "redux";
import {signup_Reducer,login_Reducer} from "./authRedcer";
import {getUser_Reducer,getUser_Friends_Reducer,updateUser_Reducer,getAllUser} from "./userRedcer"
import { uploadPhotoReducer, getAllpost,deletePost,likePost} from "./postReducer";
const reducer  = combineReducers({

        // USER
        getAllUser:getAllUser,     //This is for get all user   
        signup_Reducer:signup_Reducer, //This  signup user
        login_Reducer:login_Reducer, // This  login user
        getUser_Reducer:getUser_Reducer, //for get particular user from database
        getUser_Friends_Reducer:getUser_Friends_Reducer, //get particular user friends
        updateUser_Reducer:updateUser_Reducer, // Update particular user profile

        //POSTS
        uploadPhotoReducer:uploadPhotoReducer, //to upload image
        getAllpost:getAllpost, //to get all phots from database
        deletePost:deletePost, //to delete a particular photo
        likePost:likePost, //to like a particular post
})

export default reducer;