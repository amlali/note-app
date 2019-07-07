 const mongoose = require("mongoose");
 const bcrypt   = require('bcryptjs');
 let role = require('../../util/roles')
 let timePlugin = require('../plugins/timePlugin')
 let User = mongoose.Schema({
	//fullname
    fullname             : { type: String},
	password             : { type: String},

    //key
	email                : { type: String},
	emailVerified        : { type: Boolean, default: false},
	emailVerifiedAt      : { type: Date},

    mobileNumber         : { type: String},

	//usually active when email verified and is online
	active               : { type: Boolean, default: false},

	role				 : {type: String , default:role.roles.user.name },
	//password reset
	passwordResetsCount  : { type: Number, default:0},
	lastPasswordResetAt  : { type: Date},
	nextResetAt          : { type: Date},
	nationality          : { type: String},

	


},
{ usePushEach: true });

//generatePasswordHASH
User.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//checkPasswordValidationrequi

User.methods.createUser = function(obj){
    this.fullname = obj.fullname;
	this.email = obj.email;
	this.password = this.generateHash(obj.password);
	if(obj.role) this.role = obj.role;
	
}
User.methods.isValidPassword = function(password){
	if(!this.password) return false;
	console.log(`checking that ${password} = ${this.password} ....`)
	return bcrypt.compareSync(password, this.password);
};


User.plugin(timePlugin)
module.exports= mongoose.model('User',User)