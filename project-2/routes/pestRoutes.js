const express= require('express')
const router = express.Router()

//require userController
const pestController = require('../controllers/pestControllers');


//required an authentication
const auth = require('../auth');

//methods creation
router.post('/add-pest', (req, res)=> {

    pestController.createPest(req.body).then (result => res.send(result));

})

//2. Retrieve all courses 
router.get('/', (req, res) => {

    pestController.getAllPests().then(result => res.send(result))

})

//retrieve active pests
router.get('/common-pests', (req, res) => {

    pestController.getCommonPests().then(result => res.send(result))
})

//retrieve a specific pest
router.get('/specific-pest', (req, res) => {

    pestController.getSpecificPest(req.body.pestName).then(result => res. send(result))
})

//retrieve a specific pest using findById()
router.get('/:pestId', (req, res) => {

    let paramsId = req.params.pestId
    pestController.getPestById(paramsId).then(result => res.send(result))
})

//update isCommon status of the pest using findOneAndUpdate
// update isCommon status to false

router.put('/archive', (req, res)=> {

    pestController.archivePest(req.body.pestName).then(result => res.send(result))
})

//update isActive status to true
//method unarchive
router.put('/unarchive', (req, res) => {

    pestController.unarchivePest(req.body.pestName).then(result => res.send(result))

})

router.put('/:pestId/archive', (req, res) => {

    pestController.archivePestById(req.params.pestId).then(result => res.send (result))
})

//unarchive pest by Id
router.put('/:pestId/unarchive', (req, res) => {

    pestController.unarchivePestById(req.params.pestId).then(result => res.send(result))
})

router.delete('/delete-pest', (req, res) => {

        pestController.deletePest(req.body.pestName).then(result => res.send(result))

})

//delete pest using findById and delete()
router.delete('/:pestId/delete-pest', (req, res) => {

    pestController.deletePestById(req.params.pestId).then(result => res.send(result))

})

router.put('/:pestId/edit', (req, res) => {

    pestController.editPest(req.params.pestId, req.body).then(result => res.send(result))
})

module.exports = router;