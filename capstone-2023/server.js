const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
// const ejs = require('ejs');

//ejs
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({urlencoded: true}));

// mongodb connection and notif 
mongoose.connect('mongodb+srv://jaspervillarosa:weelspargo@villarosacluster.pcl70ke.mongodb.net/capstone-database',
{useNewUrlParser: true, useUnifiedTopology: true});

//create a schema
const pestSchema = {
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
    }
}

const Pest = mongoose.model("Pest", pestSchema);

//crud operations
app.get('/add-pest', (req, res)=> {
    res.sendFile(__dirname + '/data.html');
});

app.post('/', (req, res)=> {
  
    let newPest = new Pest({
        pestName: req.body.pestName,
        scientificName: req.body.scientificName,
        cause: req.body.cause,
        remark: req.body.remark,
        management: req.body.management

    })

    newPest.save().then((result, error) => {

        if (error){
            return false
        }

        else {
            return true
        }
    })

    res.redirect('/add-pest')


})

app.get('/display-pests', (req, res) => {

   Pest.find({}, (err, pests)=>{
    res.render('displayDatasets', {
        pestLists: pests
    })
   })
});

//listen
app.listen(3001, function() {
    console.log("server is running on 3000");
})

