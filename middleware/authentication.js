const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { UnauthenticatedError } = require('../errors');



const auth = (req, res, next) => {
	console.log('req.headers = ', req.headers);
	
	// Check header
	const authHeader = req.headers.authorization;
	console.log('\nauthHeader = ', authHeader);
	
	console.log("\nauthHeader.startsWith('Bearer') = ", authHeader.startsWith('Bearer'));
	
	if (!authHeader || !authHeader.startsWith('Bearer')) {
		throw new UnauthenticatedError('Authentication invalid');
	}
	
	// Pagar o valor do hash de authHeader
	const token = authHeader.split(' ')[1];
	console.log('\nToken = ', token);
	
	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		
		// Attach user to Jobs routes
		req.user = { userId: payload.userId, name: payload.name };
		
		next();
	} catch (error) {
		throw new UnauthenticatedError('Authentication invalid');
	}
	
	
};



module.exports = auth





