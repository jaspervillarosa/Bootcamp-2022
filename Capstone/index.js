console.log("connected")

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
// const ejs = require('ejs');

//cors - cross origin resource sharing (browse security - feature that restricts cross-origin http request with pther server)

//import routes modules
const userRoutes = require('./routes/userRoutes')
const pestRoutes = require('./routes/pestRoutes')
const sampleRoutes = require('./routes/sampleRoutes')

// mongodb connection and notif 
mongoose.connect('mongodb+srv://jaspervillarosa:weelspargo@villarosacluster.pcl70ke.mongodb.net/?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Connected to the database'))


//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

//Routes
app.use('/api/users', userRoutes)
app.use('/api/pest', pestRoutes)
app.use('/', sampleRoutes)

//ejs
// app.set('view engine', 'ejs');

//get
app.get('/', (req, res) =>{
   res.sendFile(__dirname + '/addData.html');
})

app.post('/add-pest', function(req, res) {

    // let newPest = new Pests({
    //     pestName: req.body.title,
    //     remark: req.body.remark
    // });

    // newPest.save();
    // res.redirect('/')

    pestController.createPest(req.body).then (result => res.send(result));

})

app.listen(PORT, () => console.log(`Server running at port ${PORT}
`));
