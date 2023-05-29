import React from 'react'


function MiniProfile(props) {


console.log("props are",props.user.username) ;

  return (
    <div  className='flex items-center justify-between  w-full mt-14 ml-0 md:ml-6'> 
    <a href='/profile'>
        <img className="w-14 h-14 rounded-full border p-[1px]" 
        src={`${props.user.profilePicture? props.user.profilePicture : ('https://picsum.photos/id/1027/150/150')}`} alt=""/>

        </a>
        <div className='text-white  text-sm flex-1 mx-4'>
        <a href='/profile'>
        <h2 className='font-bold'>{props.user.username}</h2>

        </a>
        <h3 className='text-gray-400 truncate'>Welcome to Instagram</h3>

        </div>

        <button className=' text-blue-400 text-sm font-semibold'>Sign Out</button>  
        
    </div> 
  )
}

export default MiniProfile