// controllers
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
	
	// Usar methods() do mongoose.Schema obj
	const token = user.createJWT();
	
	res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};


const login = async (req, res) => {
	
	res.send('login user');
};




module.exports = {
	register,
	login
}




