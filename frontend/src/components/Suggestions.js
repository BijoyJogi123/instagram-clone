import React, { useEffect, useState } from 'react'
import {useSelector } from 'react-redux';


function Suggestions() {

  const json = useSelector(state => state.getAllUser.allUser);
  
  
  const [suggestions, setSuggestion] = useState(null);

 

 const users =  json.sort(() => 0.5 - Math.random()).slice(0, 5);

  useEffect(() => {
    if (users) {
      setSuggestion(users);
    }
  }, []);

  return (
    <div className='mt-4 ml-8'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-gray-400 text-sm font-bold'>Suggestions for you</h3>
        <button className='text-white font-semibold'>See All</button>
      </div>
      {suggestions && suggestions.map(profile => (
        <div key={profile._id} className='flex items-center justify-between mt-3'>
          <img className='w-10 h-10 rounded-full p-[2px]'
            src={profile.profilePicture ? profile.profilePicture : "https://picsum.photos/id/1027/150/150"}
            alt="" />
          <div className='flex-1 ml-4'>
            <h2 className='font-semibold  text-white text-sm' >{profile.username}</h2>
            <h3 className='text-gray-400 text-xs' >Work at {profile.full_name}</h3>
          </div>
          <button className='text-blue-400 text-xs font-bold'>Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions