const Pest = require('../models/Pests');

module.exports.createPest = (reqBody) => {

    let newPest = new Pest({
        pestName: reqBody.pestName,
        scientificName: reqBody.scientificName,
        cause: reqBody.cause,
        remark: reqBody.remark,
        management: reqBody.management

    })

    return newPest.save().then((result, error) => {

        if (error){
            return false
        }

        else {

            return true
        }
    })


}

module.exports.getAllPests = () => {

    return Pest.find().then( (result, error) => {

        if (error){

            return false
        }
        else {
            return result
        }
    })
}

module.exports.getCommonPests = () => {

    return Pest.find({isCommon:true}).then((result, error) => {

        if (error) {

            return false
        }
        else {
            return result
        }
    })
}

//get specific pest
module.exports.getSpecificPest = (reqBody) => {

    //look for the matching document in the database

    return Pest.findOne({pestName: reqBody}).then((result, error) => {

        if(result == null) {
            return 'Pest not existing'
        }

        else {

            if (result) {
                return result
            }
            else {

                return error
            }
        }
    })
}

module.exports.getPestById = (params) => {

    //look for matching filter
    return Pest.findById(params).then((result, error) => {

        //if matching document not found, return non existing

        if(result == null) {
            return 'Pest not existing'
        }
        else {

            if (result) {
                return result
            }
            else {

                return error
            }
        }
    })
}

module.exports.archivePest = (reqBody) => {

    let pestStatus = {

        isCommon: true
    }

    return Pest.findOneAndUpdate ({pestName: reqBody}, pestStatus).then((result, error) => {

        if(result == null) {
            return 'Course not existing'
        }
        else {

            if (result) {
                return result
            }
            else {

                return error
            }
        }
    })
}

module.exports.unarchivePest = (reqBody) => {

    let pestStatus = {

        isCommon: true
    }

    return Pest.findOneAndUpdate ({pestName: reqBody}, pestStatus).then((result, error) => {

        if(result == null) {
            return 'Course not existing'
        }
        else {

            if (result) {
                return result
            }
            else {

                return error
            }
        }
    })
}

module.exports.archivePestById = (params) => {

    return Pest.findByIdAndUpdate(params, {isCommon: false}).then ((result, error) => {

        if(result == null) {
            return 'Course not existing'
        }
        else {

            if (result) {
                return result
            }
            else {

                return error
            }
        }
    })
}

module.exports.unarchivePestById = (params) => {

    return Pest.findOneAndUpdate(params, {isCommon: true}).then((result, error) => {

        if(result == null) {
            return 'Course not existing'
        }
        else {

            if (result) {
                return result
            }
            else {

                return error
            }
        }

    })
}

module.exports.deletePest = (name) => {

    //look for matching document in the database and delete the matching document
    return Pest.findOneAndDelete({pestName: name}).then((result, error) => {

        if(result == null) {
            return 'Course not existing'
        }
        else {

            if (result) {
                return result
            }
            else {

                return error
            }
        }
    })
}

module.exports.deletePestById = (id) => {

    return Pest.findByIdAndDelete(id).then((result, error) => {

        if(result == null) {
            return 'Pest not existing'
        }
        else {

            if (result) {
                return result
            }
            else {

                return error
            }
        }
        
    })
}

module.exports.editPest = (id, reqBody) => {

    const {pestName, scientificName, cause, remark, management} = reqBody

    let updatedPest = {

        pestName: pestName,
        scientificName: scientificName,
        cause: cause,
        remark: remark,
        management: management

    }

    return Pest.findByIdAndUpdate(id, updatedPest, {new:true}).then((result, error) => {

        if(error) {
            return error
        }
        else {

            return result
        }
    })
}