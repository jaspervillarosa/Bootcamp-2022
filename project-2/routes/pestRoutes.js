const express= require('express')
const router = express.Router()

//require userController
const pestController = require('../controllers/pestControllers');


//required an authentication
const auth = require('../auth');

//methods creation
router.post('/add-pest', auth.verify, (req, res)=> {

    pestController.createCourse(req.body).then (result => res.send(result));

})

//2. Retrieve all courses 
router.get('/', (req, res) => {

    pestController.getAllPests().then(result => res.send(result))

})

//retrieve active pests
router.get('/common-pests', auth.verify, (res) => {

    pestController.getCommonPests().then(result => res.send(result))
})

//retrieve a specific pest
router.get('/specific-pest', auth.verify, (req, res) => {

    pestController.getSpecificPest(req.body.pestName).then(result => res. send(result))
})

//retrieve a specific pest using findById()
router.get('/:pestId', auth.verify, (req, res) => {

    let paramsId = req.params.pestId
    pestController.getPestId(paramsId).then(result => res.send(result))
})

//update isCommon status of the pest using findOneAndUpdate
// update isCommon status to false

router.put('/archive', auth.verify, (req, res)=> {

    pestController.archivePest(req.body.pestName).then(result => res.send(result))
})

//update isActive status to true
//method unarchive
router.put('/unarchive', auth.verify, (req, res) => {


})