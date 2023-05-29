import React, {useEffect,useState } from 'react'

import * as faker from "faker";

// import * as faker from "@types/faker"

import Story from './Story' 


function Statusbar() {

  const [suggestions,setSuggestions] = useState();


  useEffect(() => {
       
    console.log("Mounting");
    

      const suggestion = [...Array(20)].map((_,i)=>({
        ...faker.helpers.contextualCard(),
          id: i
      })
      
      );
      
        if(suggestion!=null){


          setSuggestions(suggestion);
          console.log("yea it is defined")
        }
        else{

          console.log("it is undefined")
        }
    
    
     
      
}, [])




  


  return (
    <>
      <div className=" bg-black mt-5 rounded-lg">
      <div className="flex space-x-6 p-6 overflow-x-scroll scrollbar-thin scrollbar-thumb-black border rounded-lg">
        {/* stories */}
          {suggestions && suggestions.map((profile)=>(
             
               <Story key={profile.id}  
                    img={profile.avatar} 
                   username={profile.username} />
           
              
))}


          
        {/* stories */}
       

        {/* stories */}

        {/* stories */}

        {/* stories */}





      </div>

            </div>

    </>




    // <div className="p-6 bg-black  rounded-lg ">
    //   <ul className="flex space-x-6">
    //     <li className='flex flex-col items-center space-y-1'>

    //       <div className="relative bg-gradient-to-tr from-yellow-400 to-fuchsia-700 p-1 rounded-full">
    //         <a className="block bg-black p-1 rounded-full" href="/">
    //           <img className="h-24 w-24 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
    //         </a>
    //         <button className='absolute bottom-0 right-0 bg-blue-500 h-8 w-8 rounded-full text-black text-2xl font-semi-bold border-4 border-black flex justify-center items-center font-mono right-1 hover:bg-blue-700'>+</button>
    //       </div>
    //       <a href="/"> <p className="text-white text-lg" >kitty cat</p></a>
    //     </li>


    //     <li className='flex flex-col items-center space-y-1'>

    //       <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-700 p-1 rounded-full">
    //         <a className="block bg-black p-1 rounded-full" href="/">
    //           <img className="h-24 w-24 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
    //         </a>

    //       </div>
    //       <a href="/"> <p className="text-white text-lg" >kitty cat</p></a>
    //     </li>

    //     <li className='flex flex-col items-center space-y-1'>

    //       <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-700 p-1 rounded-full">
    //         <a className="block bg-black p-1 rounded-full" href="/">
    //           <img className="h-24 w-24 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
    //         </a>

    //       </div>
    //       <a href="/"> <p className="text-white text-lg" >kitty cat</p></a>
    //     </li>


    //     <li className='flex flex-col items-center space-y-1'>

    //       <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-700 p-1 rounded-full">
    //         <a className="block bg-black p-1 rounded-full" href="/">
    //           <img className="h-24 w-24 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
    //         </a>

    //       </div>
    //       <a href="/"> <p className="text-white text-lg" >kitty cat</p></a>
    //     </li>


    //     <li className='flex flex-col items-center space-y-1'>

    //       <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-700 p-1 rounded-full">
    //         <a className="block bg-black p-1 rounded-full" href="/">
    //           <img className="h-24 w-24 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
    //         </a>

    //       </div>
    //       <a href="/"> <p className="text-white text-lg" >kitty cat</p></a>
    //     </li>

    //     <li className='flex flex-col items-center space-y-1'>

    //       <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-700 p-1 rounded-full">
    //         <a className="block bg-black p-1 rounded-full" href="/">
    //           <img className="h-24 w-24 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
    //         </a>

    //       </div>
    //       <a href="/"> <p className="text-white text-lg" >kitty cat</p></a>
    //     </li>
    //   </ul>
    // </div>
  )
}

export default Statusbar