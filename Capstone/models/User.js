const mongoose = require('mongoose')

//creation of schema
const userSchema = new mongoose.Schema({

    farmerName: {
        type: String,
        required: [true, "Farmer name is required"]
    },

    address: {
        type: String,
        required: [true, "Last name is required"]
    },

    companyName: {

        type: String,
        required: [true, "Company Name is required"]

    },

    email: {

        type: String,
        required: [true, "Email is required"]
    },

    password: {

        type: String,
        required: [true, "Password is required"]
    },

    isAdmin: {

        type: Boolean,
        default: false
    },

    mobileNo: {

        type: String,
        required: [true, "Mobile Number is required"]
    },

    pestLibrary: [

        {
            scientificName: {

                type: String,
                required: [true, "Scientific Name is required"]
            },

            addedOn: {

                type: Date,
                default: new Date()
            },

            status: {

                type: String,
                default: "pestAdded"
            }
        }
    ]

});

module.exports = mongoose.model("User", userSchema);