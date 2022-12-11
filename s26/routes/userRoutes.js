const express = requir('express');
const router = express.Router();


// import the userController

const userController = require('../controllers/userControllers');

//check if email exists
router.post('/email-exists', (req, res ) => {

    userController.checkEmail(req.body).then(result => res.send(result));

});

//register a user
//http://Localhost:4000/api/users

router.post('/register', (req, res) =>{

    userController.register(req.body).then(result => res.send(result));
});

//retrieve all users
router.get('/', (req, res) =>{

    userController.getAllUsers(req.body).then(result => res.send(result));
});

//user Login
router.post('/login',(req, res) =>{

    userController.login(req.body).then(result => res.send(result));
});

//retrieving user information
router.post('/details', auth.verify, (req,res) =>{

    let userData = auth.decode(req.header.authorization)
    userController.getProfile(userData).then(result => res.send(result));
});

//enrollments
router.post('/enroll', auth.verify, (req,res) => {

    let data = {

        userId : auth.decode(req.header.authorization).id,
        courseID: req.body.courseId
    }

     userController.enroll(data).then(result => res.send(result));

});

//new enroll 

router.post('/new-enroll', auth.verify, (req,res) => {

    let data = {

        userId : auth.decode(req.header.authorization).id,
        courseID: req.body.courseId
    }

    userController.newEnroll(data).then(result => res.send(result));

});

module.exports = router;