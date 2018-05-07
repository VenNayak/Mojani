var express = require('express');
var router = express.Router();
var Cloudant = require('@cloudant/cloudant');
var cloudant = Cloudant(process.env.CLOUDANT_DB_URL);
//connect to LOGIN DB for auth
var logindb = cloudant.use(process.env.LOGIN_DB);

  //create index on login db if not existing
  var user = {name:'userId', type:'json', index:{fields:['userId']}};
	logindb.index(user, function(er, response) {
	  if (er) {
		console.log("Error creating index on user ID:"+ er);
	  }else{
		console.log('Index creation result on user ID :'+ response.result);
	  }
	});
	
	
/* POST API to check for login into the Land Records application*/
router.post('/api/authentication', (req, res) => {
  console.log('Inside Express api check for login');
  console.log("Received userID: " + req.body.userId);
  console.log("Received password: " + req.body.password);
  logindb.find({selector:{userId: req.body.userId}}, function(er, result) {
	  if (er) {
		console.log("Error finding user Information from db" + er);
		res.json({authSuccess : false, message:"Error:"+er, role: "INVALID"});
	  }
	  if(result && result.docs){
	  console.log('Found documents with userInfo count:'+ req.body.userId +":"+ result.docs.length);
	  /*for (var i = 0; i < result.docs.length; i++) {
		console.log('User Doc:'+ JSON.stringify(result.docs[i]));
	  } */
	  }
	  //check for authentication
	  if(result && result.docs && result.docs.length > 0){
	   var userInfoDB = result.docs[0];
	   var userInfoForm = req.body;
		if(userInfoDB.userId.toUpperCase() == userInfoForm.userId.toUpperCase() && userInfoDB.password == userInfoForm.password){
			console.log("User Authentication is SUCCESS !");
		    res.json({authSuccess : true,message :"User Authentication Successful" , role : userInfoDB.role});
		}else{
			 res.json({authSuccess : false,message :"Invalid Username/Password !", role :"INVALID"});
		}
	  }else{
			res.json({authSuccess : false, message:"Username not found !", role: "INVALID"});
	  }
	});	
});	
module.exports = router;