import { React, useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import logo4 from '../components/asset/black_logo.svg'
import logo5 from '../components/asset/white_facebook.png'
import { useSelector, useDispatch } from 'react-redux';
import { signup_Reducer } from '../state/action-creator/authAction';
import { getUser_Reducer } from '../state/action-creator/userAction';




//REDUCER  not working focus on that why not working


function Signup() {

  
  const json = useSelector(state => state);
  console.log(json);

  const [credentials, setCredentials] = useState({ email: "", full_name: "", username: "", password: "" });


  const history = useNavigate();

  const dispatch = useDispatch();

  const userId   =  json.signup_Reducer.userToken.data2

  // console.log(json.signup_Reducer.userToken,"yea maybe its work");

  const handelClick = async (e) => {

    e.preventDefault();

    dispatch(signup_Reducer(credentials));


   

  }

useEffect(() => {
  
  dispatch(getUser_Reducer(userId));

  

setTimeout(() => {
  
  if (json.signup_Reducer.userToken.success && json.signup_Reducer.signupStatus) {
      
      
    
    localStorage.setItem('token', json.signup_Reducer.userToken.authToken)
    history("/profile");
    
  
}

else {

  console.log("page redirection not working")


}



}, 3000);

    
  


 
}, [userId])


  //here is user id

    

  const onChange = (e) => {


    setCredentials({ ...credentials, [e.target.name]: e.target.value })

  }



  //email full_name username  password

  return (

    <div>


      <div className='h-screen bg-gray-50 flex flex-col justify-center items-center'>

        <div className='bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3'>

          <img className='h-24 w-34 ' src={logo4} alt="" />

          <p className='text-gray-500 break-normal font-semibold'>Sign up to see photos and<br />
            videos from your friends
          </p>

          <button className='mt-4 bg-blue-600 py-2 px-10 rounded-lg flex'>
            <img className='w-5 h-5 mr-2' src={logo5} alt="" />
            <span className='text-sm text-white font-semibold'>Log in  with Facebook</span>
          </button>
          <div className='flex justify-center space-x-2 w-64 mt-4'>
            <span className='bg-gray-300 h-px flex-grow t-2 relative top-2'></span>
            <span className='flex-none uppercase text-xs text-gray-400 font-semibold'>or</span>
            <span className="bg-gray-300 h-px flex-grow t-2 relative top-2"></span>
          </div>

          <form className='mt-8 w-64 flex flex-col'>


            <input onChange={onChange} className='text-xs w-full mb-2 rounded-sm border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none' name="email" type="text" placeholder='Mobile Number or Email' />
            <input onChange={onChange} className='text-xs w-full mb-2 rounded-sm border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none' name="full_name" type="text" placeholder='Full Name' />
            <input onChange={onChange} className='text-xs w-full mb-2 rounded-sm border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none' name="username" type="text" placeholder='Username' />
            <input onChange={onChange} className='text-xs w-full mb-2 rounded-sm border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none' name="password" type="text" placeholder='Password' />

            <p className='py-2 text-gray-400 text-xs'>People who use our service may have uploaded<br />
              your contact information to instgram.<span className='text-blue-900 font-semibold text-xs'>Learn More.</span></p>

            <p className='py-2 mb-2 text-gray-400 text-xs'>By signing up,you agree to our <span className='text-blue-900 font-semibold text-xs'>Term</span> ,<span className='text-blue-900 font-semibold text-xs'>Privacy</span><br />
              <span className='text-blue-900 font-semibold text-xs'>Policy</span> and <span className='text-blue-900 font-semibold text-xs'>Cookies Policy</span></p>

            <button onClick={handelClick} className='text-sm text-center bg-blue-400 text-white py-1 rounded font-medium'>Sign up</button>

          </form>







        </div>

        <div className='bg-white border  border-gray-300 text-center w-80 py-4'>
          <span className='text-sm'>have an account? </span>
          <a href="/login" className='text-blue-500 text-sm font-semibold'>Login in</a>
        </div>

        <div className='mt-3 text-center'>
          <span className='text-xs'>Get the app.</span>
          <div className='flex space-x-3 mt-4'>

            <img alt="Download on the App Store" className="w-18 h-9 " src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png" />
            <img alt="Get it on Google Play" className="w-18 h-9 " src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" />

          </div>

        </div>


      </div>

    </div>

  )
}

export default Signup