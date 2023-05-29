import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser_Reducer } from '../state/action-creator/userAction';
import { useNavigate } from 'react-router-dom'
import { render } from 'react-dom';


function UpdateProfile(props) {
    const json = useSelector(state => state);

    const [image, setImage] = useState("");
    
    const [credentials, setCredentials] = useState({ profilePicture:"" ,email: "", full_name: "", username: "", website: "", bio: "", gender: "", });
    
    
    
    const history = useNavigate();

    const dispatch = useDispatch();



    const userId = json.signup_Reducer.userToken.data2


    const handelClick = async (e) => {

        e.preventDefault();

        dispatch(updateUser_Reducer(userId, credentials));

        history('/profile');

    }

    //for user image upload

    const handleFileChange = (e) => {

        e.preventDefault();
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = ()=>{
            console.log(reader.result); //base64 string 
            setImage(reader.result);
        };
        
        render.onerror = error=>{
            console.log("Error",error);
        };


        
        

        // 


    };

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('profilePicture ', image);


    }




    console.log(credentials);


    const onChange = (e) => {


        setCredentials({ ...credentials, [e.target.name]: e.target.value,profilePicture:image })
        
        
    }



    return (





        <div className="grid grid-cols-4 p-10">
            <div className="col-span-1 border p-3">
                <div className="grid grid-rows-5">
                    {/* <!-- row part --> */}
                    <div className="row-span-1">
                        <h1 className="">Meta</h1>
                        <p className="text-flex-1 py-2 font-bold">Some account settings are moving</p>
                        <p className="text-white">Soon, Accounts Center will be the primary place to manage your account info and settings.</p>
                        <span className="text-lg font-bold text-blue-500">Learn more</span>
                    </div>

                    <div className="row-span-3 border-t-2">
                        <ul className="mt-0">
                            <li className="py-4">
                                <a href="/" className="flex  hover:bg-gray-800">
                                    <span className="font-bold"> Edit profile </span>
                                </a>
                            </li>
                            <li className="py-4">
                                <a href="/" className="flex  text-white  p-2 hover:bg-gray-800">
                                    <span className="font-medium"> Change Password </span>
                                </a>
                            </li>
                            <li className="py-4">
                                <a href="/" className="flex font-medium text-white  p-2 hover:bg-gray-800"> Apps and websites</a>
                            </li>
                            <li className="py-4">
                                <a href="/" className="flex font-medium text-white  p-2 hover:bg-gray-800"> Email notification</a>
                            </li>
                            <li className="py-4">
                                <a href="/" className="flex font-medium text-white  p-2 hover:bg-gray-800"> Push notification</a>
                            </li>
                            <li className="py-4">
                                <a href="/" className="flex font-medium text-white  p-2 hover:bg-gray-800"> Manage notification</a>
                            </li>
                            <li className="py-4">
                                <a href="/" className="flex font-medium text-white  p-2 hover:bg-gray-800"> Privacy and security </a>
                            </li>
                            <li className="py-4">
                                <a href="/" className="flex font-medium text-white  p-2 hover:bg-gray-800"> Ads</a>
                            </li>
                            <li className="py-4">
                                <a href="/" className="flex font-medium text-white  p-2 rounded-lg hover:bg-gray-800"> Superversion</a>
                            </li>
                            <li className="py-4">
                                <a href="/" className="flex font-medium text-white  p-2 rounded-lg hover:bg-gray-800"> Login activity</a>
                            </li>
                            <li className="py-4">
                                <a href="/" className="flex font-medium text-white  p-2 hover:bg-gray-800"> Email from instagram</a>
                            </li>
                            <li className="py-4">
                                <a href="/" className="flex font-medium text-white  p-2 hover:bg-gray-800"> Help</a>
                            </li>

                            <li className="py-4">
                                <a href="/" className="flex text-blue-500  p-2 hover:bg-gray-800"> <span className="text-sm font-bold text-blue-800"> Switch to professional account </span> </a>
                            </li>
                        </ul>
                    </div>

                    <div className="row-span-1 border-t-2 pt-6">
                        <h1 className="">Meta</h1>
                        <p className="py-3 text-lg font-bold text-blue-700">Account Center</p>
                        <p className="text-white">Soon, Accounts Center will be the primary place to manage your account info and settings.</p>
                    </div>
                </div>
            </div>

            {/* <!-- column part --> */}

            <div className="col-span-3  justify-center items-center border px-10 py-6">
                <form onSubmit={handleSubmit} enctype="multipart/form-data" className="m-3 flex items-center justify-between">
                    <img  className="h-10 w-10 rounded-full p-[2px]"   src={`${props.user.profilePicture? props.user.profilePicture:image ? image : ('https://picsum.photos/id/1027/150/150')}`} alt="" />

                    <div className="ml-4 flex-1">
                        <h2 className="text-sm font-bold text-white">{props.user.username}</h2>

                        <button type="submit" >

                            <label for="file-upload" className="text-sm font-bold text-blue-600">
                                Change profile photo
                            </label>
                            <input   id="file-upload" type="file" accept='image/*' name="profilePicture" className="hidden" onChange={handleFileChange}></input>
                        </button>

                    </div>




                </form>

                <div className="p-4 justify-center items-center">

                    <div className="flex justify-start space-x-8">
                        <h1 className="font-bold text-white">Name</h1>

                        <div className="">
                            <input name="name" className="text-xs w-full mb-2 rounded-sm border border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none" type="text" id="" placeholder="Name" />
                            <p className="mt-3 text-sm text-gray-400">Help people discover your account by using the name you're known by: either your full name, nickname, or business name.

                                <span className="line-clamp-1 pt-2">You can only change your name twice within 14 days..</span></p>

                        </div>



                    </div>

                    <div className="p-4">
                        <div className="flex justify-start space-x-8">
                            <h1 className="font-bold text-white">Username</h1>

                            <div className="">
                                <input onChange={onChange} name="username" className="text-xs w-full mb-2 rounded-sm border  border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none" type="text" id="" placeholder="Username" />
                                <p className="mt-3 text-sm text-gray-400">in most cases,you,ll be able to change your usename back to  for another 14 days. <span className="text-sm font-bold text-blue-500">Learn more</span></p>


                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="flex justify-start space-x-8">
                            <h1 className="font-bold text-white">Website</h1>

                            <div className="">
                                <input onChange={onChange} name="website" className="text-xs w-full mb-2 rounded-sm border  border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none" type="text" id="" placeholder="website" />
                                <p className="mt-3 text-sm text-gray-400">Editing your links is only available on mobile. Visit the Instagram app and edit your profile to change the websites in your bio.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="p-4">
                        <div className="flex justify-start space-x-8">
                            <h1 className="font-bold text-white">Bio</h1>

                            <div className="">
                                <textarea onChange={onChange} name="bio" className="text-xs w-full mb-2 rounded-sm border  border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none" id="" cols="30" rows="5" ></textarea>
                                <p className="mt-3 text-sm text-gray-400">
                                    0/150
                                </p>
                                <h1 className="font-bold mt-3 text-gray-600">Personal information</h1>
                                <p className="text-sm text-gray-400">
                                    Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="flex justify-start space-x-8">
                            <h1 className="font-bold text-white">Email</h1>

                            <div className="">
                                <input onChange={onChange} name="email" className="text-xs w-full mb-2 rounded-sm border border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none" type="text" id="" placeholder="Email" />
                            </div>
                        </div>
                    </div>

                    <div className="p-4">
                        <div className="flex justify-start space-x-8">
                            <h1 className="font-bold text-white">Gender</h1>

                            <div className="">
                                <input className="text-xs w-full mb-2 rounded-sm border border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none" type="text" name="gender" id="" placeholder="Gender" />
                            </div>
                        </div>
                    </div>


                    <div className="p-4">
                        <div className="flex justify-start space-x-8">
                            <h1 className="font-bold text-white">show account suggestions on profiles</h1>

                            <div className="space-y-8">


                                <div className="flex items-center">
                                    <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Choose whether people can see similar account suggestions on your profile, and whether your account can be suggested on other profiles <span className="font-bold text-blue-500"> [?] </span> </label>

                                </div>


                                <button onClick={handelClick} className="bg-blue-400 w-20 h-9 rounded-md" type="submit"> submit</button>
                                <span className="text-blue-500 font-bold mx-12">Temporarily deactivate my account </span>

                            </div>


                        </div>

                    </div>

                </div>
            </div>

        </div>

    )
}

export default UpdateProfile;