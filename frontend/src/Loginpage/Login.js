import {React,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import logo4 from '../components/asset/black_logo.svg'
import logo5 from '../components/asset/facebook.png'
import { useSelector, useDispatch } from 'react-redux';
import { login_Reducer } from '../state/action-creator/authAction';


function Login() {


  const json = useSelector(state => state);
  
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  console.log(json);

  const history = useNavigate();

  const dispatch = useDispatch();


  const handelClick = async (e) => {

    e.preventDefault();

   
    if(localStorage.getItem('token')){
      console.log("yea login is deleted")
      localStorage.clear();
    }
   
    
    dispatch(login_Reducer(credentials));

    console.log("yea handelclick working");
    
  }



  useEffect(() => {
    
    if (json.login_Reducer.userToken.success) {
      
    setCredentials({email:"",password:""});
      console.log("yea it is useEffect")
      localStorage.setItem('token', json.login_Reducer.userToken.authToken);
      history("/");
    }
    else {
        console.log("Your reducer not giving proper input");
    }
    
  }, [json.login_Reducer.userToken,history])
  

  



  const onChange = (e) => {


    setCredentials({ ...credentials, [e.target.name]: e.target.value })

  }


  return (
    <div>


      <div className='h-screen bg-gray-50 flex flex-col justify-center items-center'>

        <div className='bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3'>

          <img className='h-24 w-34 ' src={logo4} alt="poop" />

          <form className='mt-8 w-64 flex flex-col'>


            <input onChange={onChange}  name="email" className='text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none' type="text" placeholder='Phone number,username, or email' />
            <input onChange={onChange}  name="password" className='text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none' type="text" placeholder='Password' />

            <button onClick={handelClick}  className='text-sm text-center bg-blue-300 text-white py-1 rounded font-medium'>Log In</button>

          </form>

          <div className='flex justify-center space-x-2 w-64 mt-4'>
            <span className='bg-gray-300 h-px flex-grow t-2 relative top-2'></span>
            <span className='flex-none uppercase text-xs text-gray-400 font-semibold'>or</span>
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
          </div>

          <button className='mt-4 flex'>
            <img className='w-4 h-4 mr-1' src={logo5} alt="" />
            <span className='text-xs text-blue-900 font-semibold'>Log in  with Facebook</span>
          </button>

          <a href="/" className='text-xs text-blue-900 mt-4 cursor-pointer -mb-4'>Forget password?</a>

        </div>

        <div className='bg-white border  border-gray-300 text-center w-80 py-4'>
          <span className='text-sm'>Don't have an account? </span>
          <a href="/signup"  className='text-blue-500 text-sm font-semibold'>Sign up</a>
        </div>

        <div className='mt-3 text-center'>
          <span className='text-xs'>Get the app.</span>
          <div className='flex space-x-3 mt-4'>

          <img alt="Download on the App Store" className="w-18 h-9 " src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"/>
          <img alt="Get it on Google Play" className="w-18 h-9 " src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"/>

          </div>

        </div>


      </div>

    </div>
  )
}

export default Login