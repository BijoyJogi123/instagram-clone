import { ActionTypes } from "../constants/action-types"



// import axios from "axios";


export const signup_Reducer = (userDetails)=>{ // there is the user destructured after sending to reducer as payload 



        //bijoyjogi9564482@gmail.com
        //bijoyjogi
        //cyberdumb123
        //cyberdumb1234
       return async (dispatch)=>{

      
        try {
            
            const response =  await fetch("http://localhost:5000/api/auth/signup",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({...userDetails})

            });
            
            const json = await response.json()
            
            
            
           dispatch({

                type:ActionTypes.SIGNUP_USER,
                payload:json,

            })

        } catch (err) {
                const error = {msg:err.response.data,staus:err.response.status}
                console.log(error)
               dispatch({
                    type:ActionTypes.SIGNUP_FAILED,
                    payload:error,
                })

 
        }
    }
    
        }



export const login_Reducer = (userDetails)=>{


    return async (dispatch)=>{

      
        try {
            
            const response =  await fetch("http://localhost:5000/api/auth/login",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({...userDetails})

            });
            
            const json = await response.json()
            
            
            
           dispatch({

                type:ActionTypes.LOGIN_FAILED,
                payload:json,

            })

        } catch (err) {
                const error = {msg:err.response.data,staus:err.response.status}
                console.log(error)
               dispatch({
                    type:ActionTypes.LOGIN_FAILED,
                    payload:error,
                })

 
        }
    }
};


