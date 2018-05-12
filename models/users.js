const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({

    username:{
    type:String,
    require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    }

});

const Users = module.exports= mongoose.model('Users',usersSchema);