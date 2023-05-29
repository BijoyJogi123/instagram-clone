import { ActionTypes } from "../constants/action-types";





export const getAllUser = (json) => {


    return (dispatch) => {


        try {


            dispatch({

                type: ActionTypes.GET_ALL_USER,
                payload: json,

            })

        } catch (err) {
            dispatch({
                type: ActionTypes.FETCH_USER_FAILED,
                payload: err,
            })


        }
    }


}







export const getUser_Reducer = (id) => {




    return async (dispatch) => {


        try {


            const response = await fetch(`http://localhost:5000/api/users/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'),
                },


            });


            const json = await response.json()



            dispatch({

                type: ActionTypes.FETCH_USER,
                payload: json,

            })

        } catch (err) {
            const error = { msg: err.response.data, staus: err.response.status }
            console.log(error)
            dispatch({
                type: ActionTypes.FETCH_USER_FAILED,
                payload: error,
            })


        }
    }


}

export const getUser_Friends_Reducer = (id) => {




    return async (dispatch) => {


        try {

            const response = await fetch(`http://localhost:5000/api/users/friends/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'),
                },


            });

            const json = await response.json()



            dispatch({

                type: ActionTypes.FETCH_USER_FRIEND,
                payload: json,

            })

        } catch (err) {
            const error = { msg: err.response.data, staus: err.response.status }
            console.log(error)
            dispatch({
                type: ActionTypes.FETCH_USER_FRIEND_FAILED,
                payload: error,
            })


        }
    }


}


export const updateUser_Reducer = (id, updatedData) => {




    return async (dispatch) => {


        try {


            const response = await fetch(`http://localhost:5000/api/users/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'),
                },

                body: JSON.stringify({...updatedData})
            });

            const json = await response.json()


            console.log(json, " This is the updated user data")

            dispatch({

                type: ActionTypes.UPDATE_USER,
                payload: json,

            })

        } catch (err) {
            const error = { msg: err.response.data, staus: err.response.status }
            console.log(error)
            dispatch({
                type: ActionTypes.UPDATE_USER_FAILED,
                payload: error,
            })


        }
    }


}