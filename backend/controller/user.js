const User = require('../models/User.js');


//get all the users from database
const getAllUser = async (req,res) =>{

     try {
        
        const  user = await User.find({});
        res.status(200).json(user);

     } catch (error) {
        res.status(500).json({message:error.message});
     }
}



//to find a particular user
const getUser = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);
        const { password, ...other } = user._doc;
        res.status(200).json(other);


    } catch (error) {
        res.status(500).json({ message: error.message });
    }


}

//get friends of a particular user

const getUserFriends = async (req, res) => {  //there is a mistake recover it 


    try {

        const user = await User.findById(req.params.id);
        const followers = await Promise.all(
            user.followers.map((id) => User.findById(id))
        );

        const formattedFriends = followers.map(
            ({ _id, username, email, profilePicture, followers, city, from }) => {
                return { _id, username, email, profilePicture, followers, city, from }
            }
        )

        res.status(200).json(formattedFriends);

    } catch (error) {
        res.status(500).json({ message: error.message });

    }

}


//UPDATE

const updateUser = async (req, res) => {

    try {

        const { full_name, username, website, email, password, bio, gender,profilePicture, city } = req.body;
        const { id } = req.params;

        //this thig used for image 



        const updateuser = {};

        if (full_name) { updateuser.username = full_name };
        if (username) { updateuser.username = username };
        if (email) { updateuser.email = email };
        if (website) { updateuser.website = website };
        if (password) { updateuser.password = password };
        if(profilePicture){updateuser.profilePicture =profilePicture}
        if (gender) { updateuser.gender = gender };
        if (bio) { updateuser.bio = bio };
        if (city) { updateuser.city = city };

        let user = await User.findById(id);
        if (!user) { return res.status(401).send("Not found") };

        user = await User.findByIdAndUpdate(id, { $set: updateuser }, { new: true });

        res.status(200).send({ user, });

    } catch (error) {

        res.status(500).json({ message: error.message });
    }


}

const followUser = async (req, res) => {

    try {

        const { id } = req.params;
        const { friendId } = req.body;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        if (!user.followers.includes(friendId)) {

            await User.updateOne({ $push: { followers: friendId } })
            await User.updateOne({ $push: { followings: id } });

            res.status(200).send("User has been followed");
        }
        else {
            res.status(403).json("You already follow this user");
        }


    } catch (error) {


        res.status(500).json({ message: error.message });
    }
}

const unfollowUser = async (req, res) => {

    try {

        const { id } = req.params;
        const { friendId } = req.body;
        const user = await User.findById(id);
        const currentFriend = await User.findById(friendId);

        if (user.followers.includes(friendId)) {

            await User.updateOne({ $push: { followers: friendId } })
            await currentFriend.updateOne({ $push: { followings: id } });

            res.status(200).send("User has been unfollowed");
        }
        else {
            res.status(403).json("You dont follow this user");
        }


    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

module.exports = { getUser, followUser, unfollowUser, getUserFriends,getAllUser, updateUser }