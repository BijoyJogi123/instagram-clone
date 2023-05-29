const mongoose = require('mongoose');




const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        maxlength: [20, "name can not be more than 20 charecter"]
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    full_name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        require: true,

    },
    friends: {
        type: Array,
        default: [],
    },
    profilePicture: {
        type:String
        },

    followers: {
        type: Array,
        default: [],
    },

    followings: {
        type: Array,
        default: [],
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },
    website: {
        type: String,
        default: false,

    },

    bio: {
        type: String,
        maxlength: [50, "write a Description here"]
    },
    city: {
        type: String,
        max: 50,
    },
    from: {
        type: String,
        max: 50,
    },
    gender: {
        type: String,
        max: 5,
        min: 4,
    },
    date: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Users', UserSchema)