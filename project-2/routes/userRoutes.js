const express = require('express');
const router = express.Router();

//import the userController
const userController = require('../controllers/userControllers');

//import the required authorization
const auth = require('../auth');


//check if email exists
router.post('/email-exists', (req, res) => {

    userController.checkEmail(req.body).then(result => res.send(result))
})

//register the user
//http: //localhost: 4000/api/users
router.post('/register', (req,res) => {

    userController.register(req.body).then(result => res.send(result));
})

//get all the users
router.get('/', (req,res)=> {
    userController.getAllUsers().then(result => res.send(result));
})

//user login
router.post('/login', (req, res) => {

    userController.login(req.body).then(result => res.send(result))
})

//retrieving user info
router.post('/details', auth.verify, (req, res) => {

    let userData = auth.decode(req.headers.authorization)
    userController.getProfile(userData).then(result => res.send(result))
})

router.post('/add-pests', auth.verify, (req, res) =>{

    let data = {
        pestId: auth.decode(req.headers.authorization).id,
        scientificName: req.body.scientificName
    }
    userController.addPest(data).then(result => res.send(result))
})

router.post('/new-pests', auth.verify, (req, res) =>{

    let data = {
        pestId: auth.decode(req.headers.authorization).id,
        scientificName: req.body.scientificName
    }
    userController.newPest(data).then(result => res.send(result))
})


module.exports = router;
