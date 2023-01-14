//import the models

const User = require('./../models/User');
const Pests = require('./../models/Pests');

const bycrpt = require('bcrypt');
const auth = require('../auth');

module.exports.checkEmail = (reqBody) => {

    const {email} = reqBody;
    return User.findOne({email:email}).then((result, error) => {

        if (result != null)
        {
            return 'Email already exists'
        }
        else {
            if (result == null){

                return true
            }
            else {
                return error
            }
        }
    })
}

module.exports.register = (reqBody) => {

    let newUser = new User({

        farmerName: reqBody.farmerName,
        address: reqBody.address,
        companyName: reqBody.companyName,
        email: reqBody.email,
        password: bycrpt.hashSync(reqBody.password, 10),
        mobileNo: reqBody.mobileNo
    });

    //save()
    return newUser.save().then((result, error) => {

        if (result){
            return true
        }
        else {
            return error
        }
    })
}

//get all users
module.exports.getAllUsers = () => {

    return User.find().then((result, error) => {

        if (result){
            return true
        }
        else {
            return error
        }
    })
}

module.exports.login = (reqBody) => {

    const {email, password} = reqBody;

    return User.findOne({email: email}).then((result, error)=>{

        if (result == null){
            return false
        }
        else {

            //case if an existingemail is present but the pw is incorrect
            //check the code below
            let isPasswordCorrect = bcrypt.compareSync(password, result.password);

            if (isPasswordCorrect == true){

                return {access:auth.createAccessToken(result)}
            }

            else {

                return false
            }
        }
    })
}

module.exports.getProfile = (data) => {

    const {id} = data;

    return User.findById(id).then((result, error) => {

        if(result !=null){
             
            result.password = "";

        } else{

            return false
        }
    })
}

module.exports.addPest = async(data) => {

    const {pestId, scientificName} = data;

    //to look for matching documents of the user
    const addPestId = await User.findById(pestId).then((result, error) => {

        if (error){

            return error
        }
        else {
            result.pestLibrary.push({scientificName: scientificName})
            return result.save().then(result => {
                return true
            })
        }
    })

    //look for matching courses 
    const addScientificName = await Course.findById(scientificName).then((result, error) => {

        if (error){
            return error
        }
        else {

            result.enrolles.push({pestId: pestId})
            return result.save().then(result => {
                return true
            })
        }
    })

    //to return only one value for the funtion enroll
    if (addPestId && addScientificName){
        return true
    }

    else {
        return false
    }
}

module.exports.newPest = (data) => {

    const {pestId, scientificName} = data;

    return User.findById(pestId).then((result, error)=> {
        
        result.pestLibrary.push({scientificName:scientificName})
        if (result){
            console.log(result.pestLibrary.length);

            if(result.pestLibrary.length != 0){

                return result.pestLibrary.find(element => {
                    if (element.scientificName == scientificName){
                        console.log("if code block")
                        return false
                    }
                    else {

                        return result.save().then(result => {
                            return true
                        })
                    }
                })
            }
        }

        else {
            return error
        }
    })
}