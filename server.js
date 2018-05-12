
var express = require('express');
var mongoose= require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();



app.use(express.static(__dirname + '/view'));
app.use(bodyParser.json());
//app.use(session({secret:'mmmmmggkkkdkdk',resave:false,saveUninitialized:true}));

mongoose.connect('mongodb://rzaz:rzaz@ds139138.mlab.com:39138/rzazdb');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('connected successfully to the database on port 27017');
});
let db = mongoose.connection;

//if there is an error
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('error in connecting to the database' + err);
    }
});

const Contact = require('./models/contacts');
const User    = require('./models/users');




app.get('/contactlist', function (req, res) {

  Contact.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/contactlist', function (req, res) {
  let newContact = new Contact({
    name:req.body.name,
    number:req.body.number,
    location:req.body.location,
    job:req.body.job
});
newContact.save((err,contact)=>{
    if(err)
    {
        res.json({msg:'failed to add contact'});
    }else{
        res.json({msg:'contact added succesfully'});
    }
});
});

app.delete('/contactlist/:id', function (req, res) {
  Contact.remove({_id:req.params.id},function(err,result){
    if(err)
    {
        res.json("unable to deleted  contact "+err);
    }else{
        res.json("contact deleted successfully"+result);
    }
});
});

app.get('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  
  Contact.findById({_id: id}, function (err, doc) {
    res.json(doc);
  });
});

app.put('/contactlist/:id', function (req, res) {
      let contact={};
      contact.name=req.body.name;
      contact.number= req.body.number;
      contact.location= req.body.location;
      contact.job=req.body.job ;
     let query= {_id:req.params.id};
    
    Contact.update(query,contact,function (err, doc) {
      if(err){
        res.json('error in updating');
      }else{
        res.json(doc);
      }
      
    }
  );
});




app.post('/login', function (req, res) {
  
      var username=req.body.username;
      var password=req.body.password;
      User.findOne({username:username,password:password},function(err,user){
      if(err)
      {
          res.json({err:'failed to find user'});
          console.log(err+"not found");
      }
      if(!user)
      {
          console.log(err+"not found");
        res.json({err:'user not found$$'});
      }
      req.session.user=user;
  });
  });


  app.post('/register', function (req, res) {
    let newUser = new User({
      username:req.body.username,
      password:req.body.password,
      email:req.body.email
      
  });
  console.log("name"+req.username+"pass"+req.password+"email"+req.email);
  newUser.save((err,user)=>{
      if(err)
      {
          res.json({err:'failed to add user'});
          console.log("fail add user");
      }else{
         
          res.json({err:'user added succesfully',"name":req.username,"pass":req.password,"email":req.email});
          console.log("successfuly added");
      }
  });
  });

  
app.listen(process.env.PORT || 3000);
console.log("Server running on port 3000");
