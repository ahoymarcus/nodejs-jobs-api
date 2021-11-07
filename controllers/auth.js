// controllers
const bcryptjs = require('bcryptjs');

const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');


// ATTENTION: never repass passwords AS Strings!!! 
const register = async (req, res) => {
	const { name, email, password } = req.body;
	
	// Random bytes data
	const salt = await bcryptjs.genSalt(10);
	const hashedPassword = await bcryptjs.hash(password, salt);
	
	const tempUser = { name, email, password: hashedPassword };
	
	// Manual validation without Mongoose
	// if (!name || !email || !password) {
		// throw new BadRequestError('Please, provide name, email and password');
	// }
	
	const user = await User.create({ ...tempUser });
	
	res.status(StatusCodes.CREATED).json({ user });
};


const login = async (req, res) => {
	
	res.send('login user');
};




module.exports = {
	register,
	login
}




