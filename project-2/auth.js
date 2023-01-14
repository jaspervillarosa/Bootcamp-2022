//jsonwebtoken - purely used for authentication
//authentication process
    //sign
    //verify
    //decode

//import the dependencies
const jwt = require ('jsonwebtoken');
const secret = "PestVerificationAPI";

//signing process
module.exports.createAccessToken = (user) => {

    const data = {
        id: user_id,
        email: user.email,
        isAdmin: user.isAdmin
    }

    return jwt.sign(data, secret, {});
}

//verify process
module.exports.verify = (req, res, next) => {

    //get the token in the headers authorization
    let token = req.header.authorization
    //tells the server what routes, services, and resources the user is allowed to access

    if(typeof token !== "undefined"){

        token = token.slice(7, token.length);
        //syntax: jwt.verify (token, secret, cb(error, data))
        return jwt.verify(token, secret, (error, data) => {

            if (error){

                return res.send({auth: 'failed'})
            }
            else {
                next();
            }
        })
    }
}

//decoding process
module.exports.decode = (token) => {

    if(typeof token != 'undefined'){

        token = token.slice(7, token.length)
        return jwt.verify(token, secret, (error, data) => {

            if (error){
                return null
            }
            else {
                return jwt.decode(token, {complete:true}).payload
            }
        })
    }
}