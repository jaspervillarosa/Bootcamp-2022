const mongoose = require ('mongoose');

//creation of schema - these are tables that containes details in it.
const courseSchema = new mongoose.Schema({

    courseName: {

        type: String,
        required: [true, "Course name is required"]
    },

    description: {
        type: String,
        required: [true, "course description is required"]
    },

    price: {

        type: String,
        required: [true, "Course price is required"]
    },

    isActive: {
        
        type: Boolean,
        default: true
    },

    createdOn: {

        type: Date,
        default: new Date()
    },

    enrollees: [

        {
            userId: {
                type: String,
                required: [true, "User ID is required"]
            },

            enrolledOn: {

                type: Date,
                default: new Date()
            }
        }
    ]
});

module.exports = mongoose.model("Course", courseSchema);