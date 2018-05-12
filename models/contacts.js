const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    job:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    }
});

const Contact = module.exports = mongoose.model('Contact',contactSchema);