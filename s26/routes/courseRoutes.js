const express = require('express');
const router = express.Router();

//require userController
const courseController = require('../controllers/courseControllers');

//require an authentication
const auth = require('../auth');

//methods creation

//1. Create a course
router.post('/create-course', auth.verify, (req, res) => {

    courseController.createCourse(req.body).then(result => res.send(result));

})

//2. Retrieve the course

router.get('/', (req, res) => {

    courseController.getAllCourses().then(result => res.send(result))
})

//3. Retrieve active course

router.get('/', auth.verify, (res) => {

    courseController.getActiveCourses().then(result = res.send(result))
})

//4. Retrieve a specific course using findOne()

router.get('/specific-course', auth.verify, (req,res) => {

    courseController.getSpecificCourse(req.body.courseName).then(result => res.send(result))

})

//5. Retrieve a specific course using findById()
router.get('/:courseId', auth.verify, (req, res) => {

    let paramsId = req.params.courseId
    courseController.getCourseById(paramsId).then(result => req.send(result));

})

//update isActive status of the course using findOneAndUpdate
//update isActive  status to false
router.put('/archive', auth.verify, (req, res) => {

    courseController.archiveCourse(req.body.courseName).then(result => req.send(result));
})

//exercise
//update isActive status to true
//method unarchive

router.put('/archive', auth.verify, (req, res) => {

    courseController.unarchiveCourse(req.body.courseName).then(result => req.send(result));
})