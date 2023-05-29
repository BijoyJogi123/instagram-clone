import { ActionTypes } from "../constants/action-types"

const initialState = {

    post:{
        caption:"Write a caption here",
        img:"this is image",
        likes:Array.length,
        location:"JAPAN",
    }

}
const initialState2 = {

    posts:{}
       
}

const initialState3 = {

    posts:{}
       
}

const initialState4 = {

    like:[]
       
}


export const uploadPhotoReducer = (state = initialState, { type, payload }) => {

    


    switch (type) {

        case ActionTypes.FETCH_USER_FRIEND:


            return {
                ...state, uploadPhotoReducer:payload,
                
            }


        case ActionTypes.FETCH_USER_FAILED:

            return {
                ...state, uploadPhotoReducer:payload, 
            }

        default:
            return state;

    }

}

export const getAllpost = (state = initialState2, { type, payload }) => {


   

    switch (type) {

        case ActionTypes.GET_POSTS:


            return {
                ...state, getAllpost:payload,
                
            }


        case ActionTypes.GET_ALL_USER_FAILED:

            return {
                ...state, getAllpost:payload, 
            }

        default:
            return state;

    }

}
export const deletePost = (state = initialState3, { type, payload }) => {

    


    switch (type) {

        case ActionTypes.DELETE_PHOTO:


            return {
                ...state, deletePost:payload,
                
            }


        case ActionTypes.DELETE_PHOTO_FAILED:

            return {
                ...state, deletePost:payload, 
            }

        default:
            return state;

    }

}
export const likePost = (state = initialState4, { type, payload }) => {

    


    switch (type) {

        case ActionTypes.LIKE_POST:


            return {
                ...state, likePost:payload,
                
            }


        case ActionTypes.LIKE_POST_FAILED:

            return {
                ...state, likePost:payload, 
            }

        default:
            return state;

    }

}