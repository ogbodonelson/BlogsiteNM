// creating mongoclient by destructuring from mongodb
const { MongoClient } = require('mongodb');

// declaring a variable database which holds our db connection
let dbConnection;

// implementing module.exports, so that we could use this in another file
module.exports = {
    connectdb : (cb)=>{
        MongoClient.connect('mongodb+srv://TechTheWorld:12345Nelson@techtheworld.t6blvje.mongodb.net/test')
        .then((client)=>{
            // now assigning the db var to the db made connection
            dbConnection = client.db();
            return cb();
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getdb : ()=> dbConnection
}