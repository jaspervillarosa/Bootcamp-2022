const mongoose = require("mongoose");

//creation of Schema

const pestSchema = new mongoose.Schema({

    pestName: {
        type: String,
        required: [true, "Pest name is required"]
    },

    scientificName: {

        type: String,
        required: [true, "Scientific name is required"]
    },

    cause: {

        type: String,
        required: [true, "Cause is required"]
    },

    remark: {

        type: String,
        required: [true, "Remark is required"]
    },

    management: {

        type: String,
        required: [true, "Management is required"]
    },

    isCommon: {
        type: Boolean,
        default: true
    },

    createdOn: {

        type: Date,
        default: new Date()

    },

    pestees: [
        {
            pestId: {
                type: String,
                required: [true, "Pest ID is required"]
            },

            inputtedOn: {
                type: Date,
                default: new Date()
            }
        }
    ]

});

module.exports = mongoose.model("Pests", pestSchema);