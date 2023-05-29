import { ActionTypes } from "../constants/action-types";

const initialState = {
    user: {
        // _id: '6425e2785393e4769a6c0163',
        username:"ABC",
        email:"ABC@gmail.com",
        full_name:"ABC",
        friends:[],
        profilePicture:"",
        followers:[],
        followings:[],
        isAdmin:false,
        date:'2023-03 - 30T19: 22: 59.747+00: 00'
        
        }
}

const initialState2 = {

        user_Friends:{

        }


}


const initialState3 = {

        updated_user:{

        }
}
 
const initialState4 = {

    allUser:{

    }
}

export const getAllUser = (state = initialState4, { type, payload }) => {

    switch (type) {

        case ActionTypes.GET_ALL_USER:


            return {
                ...state, allUser:payload,
                
            }


        case ActionTypes.FETCH_USER_FAILED:

            return {
                ...state, allUser:payload, 
            }

        default:
            return state;

    }

}









export const getUser_Reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.FETCH_USER:


            return {
                ...state, user:payload,
                
            }


        case ActionTypes.FETCH_USER_FAILED:

            return {
                ...state, user:payload, 
            }

        default:
            return state;

    }

}

export const getUser_Friends_Reducer = (state=initialState2,{type,payload})=>{


    switch (type) {
        case ActionTypes.FETCH_USER_FRIEND:


            return {
                ...state, user_Friends:payload
            }


        case ActionTypes.FETCH_USER_FRIEND_FAILED:

            return {
                ...state, user_Friends:payload, 
            }

        default:
            return state;

    }





}


export const updateUser_Reducer =  (state=initialState3,{type,payload})=>{


    switch (type) {
        case ActionTypes.UPDATE_USER:


            return {
                ...state, updated_user:payload
            }


        case ActionTypes.UPDATE_USER_FAILED:

            return {
                ...state, updated_user:payload, 
            }

        default:
            return state;

    }





}
