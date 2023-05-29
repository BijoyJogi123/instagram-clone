import React from 'react'




function Post({ id, username, userImg, img, caption }) {

  return (

    <div className='bg-black my-7 border rounded-lg'>
      {/* header */}


      <div className='flex items-center p-5'>
        <img src={userImg} className="rounded-full w-12
         h-12 object-contain border p-1 mr-3" alt="" />
        <p className='text-white flex-1 font-bold'>{username}</p>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>

      </div>
      {/* img */}
      <img src={img} className="object-cover w-full" alt="" />

      {/* buttons */}


      <div className='flex justify-between px-4 pt-4'>
      <div className='flex space-x-4' >

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="btn w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>

        <svg aria-label="Comment" className='text-white w-6 h-6 btn' color="rgb(142, 142, 142)" fill="rgb(142, 142, 142)" height="24" role="img" viewBox="0 0 24 24" width="24">
          <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>

          <svg aria-label="Share Post" className='text-white btn' color="rgb(142, 142, 142)" fill="rgb(142, 142, 142)" height="24" role="img" viewBox="0 0 24 24" width="24">
            <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
          </svg>

      </div>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white btn" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>


      </div>
      {/* caption */}
      <div>
        <p className='p-5 text-white truncate'>
          <span className='font-bold mr-1'>{username}  </span>{caption}
        </p>
      </div>


      {/* comments */}

      {/* input box */}
   <form className='flex items-center p-4 border-t-[1px]'>
  
  
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-7 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>

      <input type="text" className='border-none flex-1 outline-none focus:ring-0 bg-black text-white'  placeholder='Add a comment...' />
      <button className='text-blue-300 font-semibold'>Post</button>


   </form>

    </div>






    //   <div className="mt-4">
    //   <div className="bg-black border rounded-lg">
    //     <div className="flex items-center px-4 py-3">
    //       <img className="h-8 w-8 rounded-full" src="https://picsum.photos/id/1027/150/150" alt="boom"/>
    //       <div className="ml-3 ">
    //         <span className="text-sm text-white font-semibold antialiased block leading-tight">8fact</span>

    //       </div>
    //     </div>
    //     <img  className='w-full' src="https://picsum.photos/id/244/900/900" alt="boom"/>
    //     <div className="flex items-center justify-between mx-4 mt-3 mb-2 text-white">


    //     </div>
    //   </div>
    // </div>

  )
}

export default Post