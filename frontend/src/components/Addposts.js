import React, { useState } from 'react'
import storage from '../firebaseConfig';
import {
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "firebase/storage";

import {useDispatch } from 'react-redux';
import { uploadPhotoReducer } from '../state/action-creator/postAction'


function Addposts(props) {


    const [credentials, setCredentials] = useState({ caption:"" ,location:"",img:"",username:""});
    const [imageUrl,setImageUrl] = useState("");
    const [image, setImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [uplaodeStage, setUploadeStage] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 
    const dispatch = useDispatch();


    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        setUploadeStage(1);

    }

    // This function uploading image 

    const ImageUpload = (event) => {
        event.preventDefault();

       
            if (!image) {
                alert("Please upload an image first!");
            }

            const storageRef = ref(storage, `/files/${image.name}`);

            // progress can be paused and resumed. It also exposes progress updates.
            // Receives the storage reference and the file to upload.
            const uploadTask = uploadBytesResumable(storageRef, image);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );

                    // update progress
                    console.log(`Uploade is ${percent}% done`)
                }, 
                
                (err) => console.log(err),
                () => {
                    // download url
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setImageUrl(url);
                    });
                }
            );



            setUploadeStage(2);


        }



        const BackUploadImage = (e) => {
            e.preventDefault()
            setUploadeStage(0);
            setPreviewImage(null);

        }



        function handleButtonClick() {
            setIsDropdownOpen(!isDropdownOpen);
        }



        // For taking post deatails 

   


        const onChange = (e) => {
    
    
            setCredentials({ ...credentials, [e.target.name]: e.target.value,img:imageUrl,username:props.username})
            
            
        }


        const Posted = (e)=>{
            e.preventDefault();

            console.log('This is the posting credentials',credentials)
            dispatch(uploadPhotoReducer(credentials)); 



        }




        return (
            <>


                <div className={`relative text-center ${uplaodeStage == 2 ? 'w-100 ' : 'px-24 py-24'} mx-auto max-w-3xl`}>
                    {/*content*/}

                    {/*header*/}




                    <div className="bg-gray-900 flex flex-row justify-between items-center py-2 px-4">

                        {previewImage ? (
                            <><div className='flex items-center'>


                                <svg aria-label="Back" onClick={BackUploadImage} className="font-bold" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="24" role="img" viewBox="0 0 24 24" width="24">
                                    <title>Back</title>
                                    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line>
                                    <polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline>
                                </svg>

                            </div>
                                <div className='flex items-center'>
                                    <h3 className="text-sm text-white font-bold ml-2">crop
                                    </h3>
                                </div>

                                {uplaodeStage == 1 ? (<button onClick={ImageUpload} className="text-blue-400 text-sm font-semibold">Next</button>) : (<button onClick={Posted} className="text-blue-400 text-sm font-semibold">Share</button>)}

                            </>


                        ) : (
                            <div className='flex items-center'>
                                <h3 className="text-sm text-white font-bold">Create a new post</h3>
                            </div>
                        )}

                    </div>

                    <hr />
                    <div className="border-0 shadow-lg  flex flex-row bg-black outline-none focus:outline-none">


                        {/*body*/}

                        <form onSubmit={handleSubmit}>






                            <div className={` ${previewImage ? '' : 'px-24 py-24'} md:px-30 md:py-26 text-white `}>

                                {previewImage ?

                                    (
                                        <img src={previewImage} alt="Preview" className='w-96 h-96' />
                                    ) :

                                    (
                                        <>
                                            <svg arial-label="Icon to represent media such as images or videos" className="h-40 w-40" color="rgb(245, 245, 245)" fill="rgb(245, 245, 245)" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><title>Icon to represent media such as images or videos</title><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path>
                                                <path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg><h1 className='text-white  font-bold text-lg'>Drag photos and Videos here</h1>
                                            <div className='p-4'>

                                                <button type="submit" >

                                                    <label for="file-upload" className="bg-blue-500 p-3 text-white text-md text-lg font-bold rounded-md">
                                                        Select from computer
                                                    </label>
                                                    <input id="file-upload" type="file" className="hidden" onChange={handleFileChange}></input>
                                                </button>

                                            </div>
                                        </>)}


                            </div>

                        </form>




                        {/* This is data taking from user */}

                        {uplaodeStage == 2 ? (

                            <div className='border-0 shadow-lg flex flex-col  bg-gray-900 outline-none focus:outline-none'>

                                <div className="m-1 flex items-center justify-start">
                                    <img className="h-8 w-8 rounded-full p-[2px]" src="https://picsum.photos/id/1027/150/150" alt="" />

                                    <div className="px-2">
                                        <h2 className="text-xs font-bold text-white">Bijoy jogi</h2>
                                    </div>
                                </div>

                                <textarea onChange={onChange} name="caption" className="text-xs w-full text-white mb-2 border-none bg-gray-900 border-gray-300 rounded-md py-2 px-3  focus:border-none" cols="30" rows="5" placeholder='Write a caption...'></textarea>


                                <div className='flex flex-col px-2'>

                                    <div className='flex justify-between items-center py-2 px-1'>


                                        <svg aria-label="Emoji" className='h-5 w-5' color="rgb(168, 168, 168)" fill="rgb(168, 168, 168)" height="20" role="img" viewBox="0 0 24 24" width="20"><title>Emoji</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>

                                        <p className='text-gray-400 text-xs'>0/2,200</p>

                                    </div>

                                    <div className='flex justify-between items-center py-2 px-1'>
                                        <input  onChange={onChange} name="location" className='text-sm w-40 bg text-gray-200 bg-gray-900 active:border-none' placeholder='Add location' />

                                        <svg aria-label="Add location" color="white" fill="white" height="16" role="img" viewBox="0 0 24 24" width="16"><title>Add location</title><path d="M12.053 8.105a1.604 1.604 0 1 0 1.604 1.604 1.604 1.604 0 0 0-1.604-1.604Zm0-7.105a8.684 8.684 0 0 0-8.708 8.66c0 5.699 6.14 11.495 8.108 13.123a.939.939 0 0 0 1.2 0c1.969-1.628 8.109-7.424 8.109-13.123A8.684 8.684 0 0 0 12.053 1Zm0 19.662C9.29 18.198 5.345 13.645 5.345 9.66a6.709 6.709 0 0 1 13.417 0c0 3.985-3.944 8.538-6.709 11.002Z"></path></svg>
                                    </div>


                                    <div className='flex justify-between items-center  py-2 px-1'>



                                        <button onClick={handleButtonClick} className={` ${!isDropdownOpen ? '' : 'font-semibold'} text-white text-sm`} type="button">Advanced settings</button>

                                        <svg onClick={handleButtonClick} className="w-4 h-4 text-white " aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>

                                    </div>
                                    {/* <!-- Dropdown menu --> */}
                                    <div className={` relative  bg-gray-900 p-2 rounded-md shadow-md ${isDropdownOpen ? '' : 'hidden'}`}>
                                        <ul className="p-3 space-y-1 text-sm text-gray-600 dark:text-gray-200">
                                            <li className='flex items-center justify-between'>
                                                <span className=" text-sm font-medium text-gray-900 dark:text-gray-300">Hide likes and view counts on this post</span>
                                                <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">

                                                    <label className="relative inline-flex items-center w-full cursor-pointer">
                                                        <input type="checkbox" value="" className="sr-only peer" />
                                                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-900 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-300 peer-checked:bg-blue-600"></div>

                                                    </label>
                                                </div>

                                            </li>
                                            <p className='text-xs mt-3 text-justify text-gray-600'>Only you will see the total number of likes and views on this post. <br />You can change this later by going to the ··· menu at the top of the post.<br /> To hide like counts on other people's posts, go to your account settings. Learn more</p>
                                            <li className='flex items-center justify-between'>
                                                <span className=" text-sm font-medium text-gray-900 dark:text-gray-300">Turn off commenting</span>
                                                <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">

                                                    <label className="relative inline-flex items-center w-full cursor-pointer">
                                                        <input type="checkbox" value="" className="sr-only peer" />
                                                        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-900 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-300 peer-checked:bg-blue-600"></div>

                                                    </label>
                                                </div>

                                            </li>
                                            <p className='text-xs mt-3 text-justify text-gray-600'>You can change this later by going to the ··· menu at the top of your post.</p>

                                        </ul>
                                    </div>
                                </div>


                            </div>) : (<></>)



                        }


                    </div>





                </div>

            </>
        )
    }

    export default Addposts