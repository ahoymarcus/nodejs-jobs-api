// controllers
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');



// ATTENTION: never repass passwords AS Strings!!! 
const register = async (req, res) => {
	// Manual validation without Mongoose
	// if (!name || !email || !password) {
		// throw new BadRequestError('Please, provide name, email and password');
	// }
	
	const user = await User.create({ ...req.body });
	
	const token = jwt.sign({ userId: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '30d'} );
	
	res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};


const login = async (req, res) => {
	
	res.send('login user');
};




module.exports = {
	register,
	login
}




