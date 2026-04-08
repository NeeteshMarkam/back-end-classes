const mongoose = require('mongoose')

function connectToDb(params) {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('connectedto db');
        
    })
}

module.exports = connectToDb