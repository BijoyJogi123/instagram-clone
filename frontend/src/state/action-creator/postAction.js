import { ActionTypes } from "../constants/action-types";


export const uploadPhotoReducer = (PostDetails) => {


    return async (dispatch) => {


        try {


            const response = await fetch(`http://localhost:5000/api/posts/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'),
                },

                body:JSON.stringify({...PostDetails})

            });

    

            const json = await response.json()

           console.log(json)

            dispatch({

                type: ActionTypes.UPLOAD_PHOTO,
                payload: json,

            })

        } catch (err) {
            const error = { msg: err.response.data, staus: err.response.status }
            console.log(error)
            dispatch({
                type: ActionTypes.UPLOAD_PHOTO_FAILED,
                payload: error,
            })


        }
    }


}


export const getAllpost = (json) => {

    console.log("This is action:- ",json);
   return (dispatch) => {


        try {


            dispatch({

                type: ActionTypes.GET_POSTS,
                payload: json,

            })

        } catch (err) {
            dispatch({
                type: ActionTypes.GET_POSTS_FAILED,
                payload: err,
            })


        }
    }



}

export const deletePost = (id) => {  //this id is particular post id


    return async (dispatch) => {


        try {


            const response = await fetch(`http://localhost:5000/api/posts/${id}/deletepost/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'),
                },

                
            });

    

            const json = await response.json()

            console.log("This is the post data",json);

            dispatch({

                type: ActionTypes.DELETE_PHOTO,
                payload: json,

            })

        } catch (err) {
            const error = { msg: err.response.data, staus: err.response.status }
            console.log(error)
            dispatch({
                type: ActionTypes.DELETE_PHOTO_FAILED,
                payload: error,
            })


        }
    }


}

export const likePost = (id) => {  //this id is particular post id


    return async (dispatch) => {


        try {


            const response = await fetch(`http://localhost:5000/api/posts/${id}/like`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'),
                },

                
            });

    

            const json = await response.json()

            console.log("This is the post data",json);

            dispatch({

                type: ActionTypes.LIKE_POST,
                payload: json,

            })

        } catch (err) {
            const error = { msg: err.response.data, staus: err.response.status }
            console.log(error)
            dispatch({
                type: ActionTypes.LIKE_POST_FAILED,
                payload: error,
            })


        }
    }


}