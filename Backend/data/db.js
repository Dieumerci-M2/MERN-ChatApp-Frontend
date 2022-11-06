let mongoose = require('mongoose');
//Set up default mongoose connection
let mongoDB = 'mongodb://127.0.0.1/chatsapp';
mongoose.connect(mongoDB, { useNewUrlParser: true });
 //Get the default connection
let db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));