const express = require('express');
const mongoose = require('mongooose');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
//cors = cross origin resource sharing
//it is for browser security features that restricts cross-origin 
// http request with other servers and specifies which domain access your resources 

const userRoutes = require ('./routes/userRoutes')

//mongodb connection and notification
mongoose.connect('mongodb+srv://jaspervillarosa:<password>@cluster0.waenifz.mongodb.net/test'),
{userNewUrlParser: true, useUnifiedTopology:true}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
bd.once('open', () => console.log('connected tot he database'));

// middleware 
app/userRoutes(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors);

// Routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Server running at port ${PORT}

`));