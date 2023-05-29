import React, { useEffect } from 'react'
import MiniProfile from '../components/MiniProfile'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'
import Statusbar from '../components/Statusbar'
import Suggestions from '../components/Suggestions'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUser } from '../state/action-creator/userAction'
import { useNavigate } from 'react-router-dom'




const Home = (props) => {

  const history  = useNavigate();

  const user = props.user;




  const dispatch = useDispatch()


  







  // Its for fetching all user from server

  const allUserFromServer = async (id) => {



    try {


      const response = await fetch(`http://localhost:5000/api/users/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },


      });


      const json = await response.json()

      dispatch(getAllUser(json))

      console.log("usersL:-----------", json);

      

    } catch (err) {
      const error = { msg: err.response.data, staus: err.response.status }
      dispatch(getAllUser(error))

    }



  }




  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      history('/login');
    }
    else{
      allUserFromServer(props.user.id);
    }
  }, [history,props.user.id])



  return (
    <>
      <Sidebar />
      <div className='overflow-y-scroll snap snap-y snap-mandatory scrollbar-hide'>

        <main className="lg:ml-80  pt-1 sm:mx-40 grid grid-cols-1  md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 lg:max-w-7xl 
     mx-auto max-h-screen lg:mx-60 md:ml-50">


          <section className="lg:col-span-2 md:col-span-1 lg:mx-20 h-screen">


            <Statusbar />


            <Posts  user={user}/>


            {/* stories */}
          </section>

          <section className="sm:hidden md:inline-block lg:inline-grid  md:col-span-1 table-fixed">


            <div className='fixed top-15'>

              <MiniProfile user={user} />
              {/* <Suggestions /> */}

            </div>
          </section>

        </main>




      </div>
    </>
  )
}

export default Home