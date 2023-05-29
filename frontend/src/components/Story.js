import React from 'react'

function Story({ img, username }) {
  return (


  <div className='flex flex-col items-center  space-y-1'>

       <div className="relative hover:scale-110 transition transform duration-200 ease-out bg-gradient-to-tr from-yellow-400 to-fuchsia-700 p-[1.5px] rounded-full">
         <a className="block bg-black p-1 rounded-full" href="/">
           <img className="h-14 w-14 rounded-full object-contain cursor-pointer" src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5" alt="" />
         </a>
         <button className='absolute bottom-0 mr-0 bg-blue-500 h-8 w-8 rounded-full text-black text-xl font-semi-bold border-4 border-black flex justify-center items-center font-mono right-1 hover:bg-blue-700'>+</button>
       </div> 
       <a href="/"> <p className="text-white text-xs w-16 truncate" >{username}</p></a>
    </div>

    // <div className=''>

    //   <img className="h-14 w-14 rounded-full object-contain cursor-pointer" 
    //     src={img} alt="" />
    //   <p> {username}</p>
    // </div>


  )
}

export default Story