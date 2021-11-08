// controllers
const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors');



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


// Receber email e token
const login = async (req, res) => {
	const { email, password } = req.body;
	
	if (!email || !password) {
		throw new BadRequestError('Please, provide email and password');
	}
	
	const user = await User.findOne({ email });
	
	// Testar se existe o user.email
	if (!user) {
		throw new UnauthenticatedError('Invalid Credentials');
	}
	
	const isPasswordCorrect = await user.comparePassword(password);
	
	if (!isPasswordCorrect) {
		throw new UnauthenticatedError('Invalid Credentials');
	}
	
	const token = user.createJWT();
	
	res.status(StatusCodes.OK).json({ user: { name: user.name }, token } ); // 200
};






module.exports = {
	register,
	login
}





