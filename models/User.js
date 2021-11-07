// MODELS
require('dotenv').config();
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');



const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please provide a name'],
		minlength: 3,
		maxlength: 50
	},
	email: {
		type: String,
		required: [true, 'Please provide a email'],
		match: [
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Please, provide a valid email'
		],
		unique: true
	},
	password: {
		type: String,
		required: [true, 'Please, provide a password'],
		minlength: 6,
	}
});


// Escolher contexto do objeto com this!!!
UserSchema.pre('save', async function(next) {
	// Random bytes of data in salt...
	const salt = await bcryptjs.genSalt(10);
	this.password = await bcryptjs.hash(this.password, salt);
	
	next();
});


UserSchema.methods.createJWT = function() {
	return jwt.sign({ userId: this._id, name: this.name }, process.env.JWT_SECRET, { 
		expiresIn: process.env.JWT_LIFETIME 
	});
};





module.exports = mongoose.model('User', UserSchema);




