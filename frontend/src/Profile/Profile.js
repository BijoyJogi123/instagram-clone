import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { getAllpost } from '../state/action-creator/postAction'



function Profile(props) {

  const [post, setPost] = useState([]);
  const dispatch = useDispatch();






  const fethAlldataPosts = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/posts/allposts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
      });

      const json = await response.json();
      console.log("This is the post data", json);

      const mappedData = json.map(item => {
        // Do any necessary data transformations here
        return item;
      });

      setPost(mappedData);

      console.log(post);

      // Move dispatch call here
      


    } catch (err) {
      
      console.log(err)

      
      dispatch(getAllpost(err));
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      history('/login');
    }
    else {
      fethAlldataPosts();

    }
  }, [history])

  // Rest of component code


  useEffect(() => {

    dispatch(getAllpost(post));
    
    

  }, [post])


  



  return (
    <>




      <Sidebar />
      <div className='overflow-y-scroll  snap snap-y snap-mandatory scrollbar-hide'>


        <main className="pt-1   
   mx-auto max-h-screen ">

          <section className='min-[765px]:hidden'>

            <div className='flex  px-2 mt-3'>

              <div className="rounded-full">
                <a className="block bg-black p-1 rounded-full" href="/">




                  <img className="h-[60px] w-[60px] rounded-full p-[2px]" src={`${props.user.profilePicture ? props.user.profilePicture : ('https://picsum.photos/id/1027/150/150')}`} alt="" />

                </a>
                <span className='text-white font-bold'>{props.user.username}</span>
              </div>



              <div className='ml-3'>
                <div className='flex items-center mb-4'>
                  <p className='text-white font-bold text-lg'>{props.user.username}</p>

                  <svg aria-label="Options" className="text-white ml-2" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>

                </div>
                <a href='/update' className='text-black rounded-lg max-[330px]:px-8 bg-white py-1 px-16 font-semibold'>Edit profile</a>
              </div>
            </div>


            <div className='flex justify-between mt-6 py-1 border-y-[1px] px-14 border-gray-400'>

              <div className='items-center flex flex-col'><span className='text-white font-semibold'>2</span><p className='text-sm text-gray-400'>post</p></div>
              <div className='items-center flex flex-col'><span className='text-white font-semibold'>43</span><p className='text-sm text-gray-400'>followers</p></div>
              <div className='items-center flex flex-col'><span className='text-white font-semibold'>34</span><p className='text-sm text-gray-400'>following</p></div>

            </div>

            <div className='flex justify-between py-2 px-14'>

              <svg aria-label="Posts" className="text-white" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)" height="24" role="img" viewBox="0 0 24 24" width="24"><rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
              <svg aria-label="Saved" className="text-white" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
              <svg aria-label="Tagged" className="text-white" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
            </div>



            {/*  flexbox grid */}

            <div className='flex flex-wrap  z-50'>

              {
                post && post.map((posts) => {

                  if (posts.user == props.user.id) {


                    return <div className='w-1/3  p-px'>
                      <div className="group relative  block overflow-hidden  transition-all duration-500">
                        <a href="/" className="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                          <img className="w-38 h-38 object-cover" src={posts.img} alt="" />

                        </a>

                        <div className="absolute group-hover:left-0  group-hover:top-0  h-[100%]   transition-all duration-500  bg-gray-900 bg-opacity-25 ">


                          <div className="flex flex-col justify-center items-center 
                                 h-full">
                            <span className="p-1 space-x-2">
                              <FontAwesomeIcon icon={faHeart} className="text-white" />
                              <span className='text-xs text-white font-semibold'>{posts.likes.length}</span>
                            </span>

                            <span className="p-1 space-x-2">
                              <FontAwesomeIcon icon={faComment} className="text-white" />
                              <span className='text-xs text-white font-semibold'>560</span>
                            </span>
                          </div>

                        </div>
                      </div>
                    </div>


                  }




                })


              }
            </div>

          </section>

          {/* 
  for tablet version   */}

          <section className='lg:ml-[200px] hidden md:block pl-28 pr-28 '>




            <div className='flex  px-2 py-6'>


              <a className="block bg-black p-4 rounded-full" href="/">
                <img className="h-[150px] w-[150px] rounded-full object-contain cursor-pointer" src={`${props.user.profilePicture ? props.user.profilePicture : ('https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5')}`} alt="" />
              </a>






              <div className='ml-14 mt-2 space-y-4'>


                <div className='flex justify-between space-x-4 items-center'>
                  <span className='text-xl text-white font-semibold'>{props.user.username}</span>

                  <a href="/update" className='text-black rounded-lg  bg-white py-2 px-6 font-semibold'>Edit profile</a>
                  <svg aria-label="Options" className="text-white ml-2" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                </div>

                <div className='flex justify-between mt-6  py-1 '>

                  <div className='items-center flex space-x-2'><span className='text-white font-semibold'>2</span><p className='text-lg text-white'>post</p></div>
                  <div className='items-center flex space-x-2'><span className='text-white font-semibold'>43</span><p className='text-lg text-white'>followers</p></div>
                  <div className='items-center flex space-x-2'><span className='text-white font-semibold'>34</span><p className='text-lg text-white'>following</p></div>

                </div>
                <p className='text-white font-bold'>{props.user.username}</p>


              </div>

            </div>


            <hr className=' border-gray-400 ' />

            <div className='flex justify-between items-center   px-60 '>

              <button className='flex space-x-1 p-4 cursor-pointer  hover:border-t-2 active:border-t-2 focus:border-t-2'>

                <svg arial-label="" className="text-white w-4 h-4" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="12" role="img" viewBox="0 0 24 24" width="12">
                  <rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect>
                  <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line>
                  <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line>
                  <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line>
                  <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line>
                </svg>

                <span className='uppercase  text-white text-semibold text-xs'>photos</span>
              </button>




              <button className='flex space-x-1 p-4 cursor-pointer hover:border-t-2 active:border-t-2 focus:border-t-2'>

                <svg arial-label="" className="text-white w-4 h-4" color="rgb(142, 142, 142)" fill="rgb(142, 142, 142)" height="12" role="img" viewBox="0 0 24 24" width="12">
                  <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  </polygon>
                </svg>
                <span className='uppercase text-white text-semibold text-xs'>tagged</span>

              </button>

              <button className='flex space-x-1 p-4 cursor-pointer hover:border-t-2 active:border-t-2 focus:border-t-2'>

                <svg aria-label="Tagged" className="text-white w-4 h-4" color="rgb(0, 149, 246)" fill="rgb(0, 149, 246)" height="24" role="img" viewBox="0 0 24 24" width="24">
                  <path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  <path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
                <span className='uppercase text-white text-semibold text-xs'>Saved</span>

              </button>


            </div>







            {/*  flexbox grid */}

            <div className='flex flex-wrap  pt-1 z-50'>






              {post && post.map((posts) => {

                if (posts.user == props.user.id) {

                  return <div className='w-1/3 p-px '>
                    <div className="group relative block overflow-hidden  transition-all duration-500">
                      <a href="/" className="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                        <img className="w-64 h-64 object-cover" src={posts.img} alt="" />

                      </a>

                      <div className="absolute  group-hover:left-0  group-hover:top-0 w-[100%]  h-[100%]   transition-all duration-500  bg-gray-900 bg-opacity-25 ">


                        <div className="flex flex-col justify-center items-center 
                       h-full">
                          <span className="p-1 space-x-2">
                            <FontAwesomeIcon icon={faHeart} className="text-white" />
                            <span className='text-xs text-white font-semibold'>{posts.likes.length}</span>
                          </span>

                          <span className="p-1 space-x-2">
                            <FontAwesomeIcon icon={faComment} className="text-white" />
                            <span className='text-xs text-white font-semibold'>{posts.comments.length}</span>
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                }

              })}





            </div>




          </section>









        </main>






      </div>
    </>
  )
}

export default Profile