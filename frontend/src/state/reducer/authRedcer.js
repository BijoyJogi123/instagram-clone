import { ActionTypes } from "../constants/action-types";


const initialState = {
        users:[],
        userToken:{},
        signupStatus:false
        
}

const initialState2 = {

        users:[],
        userToken:{},
       loginStatus:false

}


export const signup_Reducer = (state = initialState, { type, payload }) => {
   
    switch (type) {
        case ActionTypes.SIGNUP_USER:   
            
            
            return {
                    ...state,userToken:payload,signupStatus:true
            }


        case ActionTypes.SIGNUP_FAILED:
            
                return {
                    ...state,userToken:payload,signupStatus:false
                        
                }
            
    default:
            return state;
        
    }

}


export const login_Reducer = (state=initialState2, {type,payload})=>{

        switch (type) {
                case ActionTypes.LOGIN_USER:   
                    
                    
                    return {
                            ...state,userToken:payload,loginStatus:true
                    }
        
        
                case ActionTypes.LOGIN_FAILED:
                    
                        return {
                            ...state,userToken:payload,loginStatus:false
                                
                        }
                    
            default:
                    return state;
                
            }


}