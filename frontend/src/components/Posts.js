import React from 'react'
import Post from './Post'
import { useSelector } from 'react-redux';







function Posts(props) {

  const posts = useSelector(state => state.getAllpost.getAllpost);

  console.log(posts)
  
  return (
    <div>
        {posts && posts.map((post)=>(
          
           <Post key={post._id}
             userImg={props.user.profilePicture}
             username={post.username} 
             img={post.img}
              caption={post.caption}
            />
        ))
        
        }
    </div>
  )
}

export default Posts